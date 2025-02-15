import { Currency, CurrencyAmount, Pair, dextopPairV2ABI } from 'libraries/swap-sdk'
import { useMemo } from 'react'
import { wrappedCurrency } from 'utils/wrappedCurrency'
import { useMultipleContractSingleData } from '../state/multicall/hooks'
import { useActiveChainId } from './useActiveChainId'

export enum PairState {
  LOADING,
  NOT_EXISTS,
  EXISTS,
  INVALID,
}

export function usePairs(currencies: [Currency | undefined, Currency | undefined][]): [PairState, Pair | null][] {
  const { chainId } = useActiveChainId()

  const tokens = useMemo(
    () =>
      currencies.map(([currencyA, currencyB]) => [
        wrappedCurrency(currencyA, chainId),
        wrappedCurrency(currencyB, chainId),
      ]),
    [chainId, currencies],
  )

  const pairAddresses = useMemo(
    () =>
      tokens.map(([tokenA, tokenB]) => {
        try {
          return tokenA && tokenB && !tokenA.equals(tokenB) ? Pair.getAddress(tokenA, tokenB) : undefined
        } catch (error: any) {
          // Debug Invariant failed related to this line
          console.error(
            error.msg,
            `- pairAddresses: ${tokenA?.address}-${tokenB?.address}`,
            `chainId: ${tokenA?.chainId}`,
          )

          return undefined
        }
      }),
    [tokens],
  )
  const results = useMultipleContractSingleData({
    addresses: pairAddresses,
    abi: dextopPairV2ABI,
    functionName: 'getReserves',
  })

  return useMemo(() => {
    return results.map((result, i) => {
      const { result: reserves, loading } = result
      const tokenA = tokens[i][0]
      const tokenB = tokens[i][1]

      if (loading) return [PairState.LOADING, null]
      if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [PairState.INVALID, null]
      if (!reserves) return [PairState.NOT_EXISTS, null]
      const [reserve0, reserve1] = reserves
      const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
      return [
        PairState.EXISTS,
        new Pair(
          CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
          CurrencyAmount.fromRawAmount(token1, reserve1.toString()),
        ),
      ]
    })
  }, [results, tokens])
}

export function usePair(tokenA?: Currency, tokenB?: Currency): [PairState, Pair | null] {
  const pairCurrencies = useMemo<[Currency | undefined, Currency | undefined][]>(
    () => [[tokenA, tokenB]],
    [tokenA, tokenB],
  )
  return usePairs(pairCurrencies)[0]
}
