import { gql } from 'graphql-request'
import { MultiChainName, multiChainQueryMainToken, getMultiChainQueryEndPointWithStableSwap } from '../../constant'

/**
 * Data for showing Pools table on the Token page
 */
const POOLS_FOR_TOKEN = (chainName: MultiChainName) => {
  const transactionGT = chainName === 'PLS' ? 1 : 100
  return gql`
  query poolsForToken($address: String!, $blacklist: [String!]) {
    asToken0: pairs(
      first: 15
      orderBy: trackedReserve${multiChainQueryMainToken[chainName]}
      orderDirection: desc
      where: { totalTransactions_gt: ${transactionGT}, token0: $address, token1_not_in: $blacklist }
    ) {
      id
    }
    asToken1: pairs(
      first: 15
      orderBy: trackedReserve${multiChainQueryMainToken[chainName]}
      orderDirection: desc
      where: { totalTransactions_gt: ${transactionGT}, token1: $address, token0_not_in: $blacklist }
    ) {
      id
    }
  }
`
}

export interface PoolsForTokenResponse {
  asToken0: {
    id: string
  }[]
  asToken1: {
    id: string
  }[]
}

const fetchPoolsForToken = async (
  chainName: MultiChainName,
  address: string,
): Promise<{
  error: boolean
  addresses?: string[]
}> => {
  try {
    const data = await getMultiChainQueryEndPointWithStableSwap(chainName).request<PoolsForTokenResponse>(
      POOLS_FOR_TOKEN(chainName),
      {
        address,
        blacklist: [],
      },
    )
    return {
      error: false,
      addresses: data.asToken0
        .concat(data.asToken1)
        .map((p) => p.id)
        .map((d) => d.toLowerCase()),
    }
  } catch (error) {
    console.error(`Failed to fetch pools for token ${address}`, error)
    return {
      error: true,
    }
  }
}

export default fetchPoolsForToken
