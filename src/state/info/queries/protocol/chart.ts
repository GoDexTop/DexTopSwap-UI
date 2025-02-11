/* eslint-disable no-await-in-loop */
import { gql } from 'graphql-request'
import { useEffect, useState } from 'react'
import { ChartEntry } from 'state/info/types'
import { fetchChartData, mapDayData } from '../helpers'
import { dextopDayDatasResponse } from '../types'
import { MultiChainName, getMultiChainQueryEndPointWithStableSwap, multiChainStartTime } from '../../constant'
import { useGetChainName } from '../../hooks'

/**
 * Data for displaying Liquidity and Volume charts on Overview page
 */
const dextop_DAY_DATAS = gql`
  query overviewCharts($startTime: Int!, $skip: Int!) {
    dextopDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {
      date
      dailyVolumeUSD
      totalLiquidityUSD
    }
  }
`

const getOverviewChartData = async (
  chainName: MultiChainName,
  skip: number,
): Promise<{ data?: ChartEntry[]; error: boolean }> => {
  try {
    const { dextopDayDatas } = await getMultiChainQueryEndPointWithStableSwap(
      chainName,
    ).request<dextopDayDatasResponse>(dextop_DAY_DATAS, {
      startTime: multiChainStartTime[chainName],
      skip,
    })
    const data = dextopDayDatas.map(mapDayData)
    return { data, error: false }
  } catch (error) {
    console.error('Failed to fetch overview chart data', error)
    return { error: true }
  }
}

/**
 * Fetch historic chart data
 */
const useFetchGlobalChartData = (): {
  error: boolean
  data: ChartEntry[] | undefined
} => {
  const [overviewChartData, setOverviewChartData] = useState<ChartEntry[] | undefined>()
  const [error, setError] = useState(false)
  const chainName = useGetChainName()

  useEffect(() => {
    const fetch = async () => {
      const { data } = await fetchChartData(chainName!, getOverviewChartData)
      if (data) {
        setOverviewChartData(data)
      } else {
        setError(true)
      }
    }
    if (!overviewChartData && !error) {
      fetch()
    }
  }, [overviewChartData, error, chainName])

  return {
    error,
    data: overviewChartData,
  }
}

export const fetchGlobalChartData = async (chainName: MultiChainName) => {
  const { data } = await fetchChartData(chainName, getOverviewChartData)
  return data
}

export default useFetchGlobalChartData
