import { ChainId } from 'config/chains'

export const GRAPH_API_PROFILE = 'https://api.thegraph.com/subgraphs/name/dextopswap/profile'
export const GRAPH_API_PREDICTION_BNB = 'https://api.thegraph.com/subgraphs/name/dextopswap/prediction-v2'
export const GRAPH_API_PREDICTION_CAKE = 'https://api.thegraph.com/subgraphs/name/dextopswap/prediction-cake'

export const GRAPH_API_LOTTERY = 'https://api.thegraph.com/subgraphs/name/dextopswap/lottery'
export const SNAPSHOT_BASE_URL = process.env.NEXT_PUBLIC_SNAPSHOT_BASE_URL
export const API_PROFILE = 'https://profile.dextopswap.com'
export const API_NFT = 'https://nft.dextopswap.com/api/v1'
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`
export const GRAPH_API_POTTERY = 'https://api.thegraph.com/subgraphs/name/dextopswap/pottery'
export const ONRAMP_API_BASE_URL = 'https://pcs-onramp-api.com'
export const MOONPAY_BASE_URL = 'https://api.moonpay.com'
export const MOONPAY_SIGN_URL = 'https://pcs-on-ramp-api.com'
/**
 * V1 will be deprecated but is still used to claim old rounds
 */
export const GRAPH_API_PREDICTION_V1 = 'https://api.thegraph.com/subgraphs/name/dextopswap/prediction'

export const INFO_CLIENT = 'https://proxy-worker-api.dextopswap.com/bsc-exchange'
export const V3_BSC_INFO_CLIENT = `https://open-platform.nodereal.io/${
  process.env.NEXT_PUBLIC_NODE_REAL_API_INFO || process.env.NEXT_PUBLIC_NODE_REAL_API_ETH
}/dextopswap-v3/graphql`

export const INFO_CLIENT_ETH = 'https://api.thegraph.com/subgraphs/name/dextopswap/exhange-eth'
export const BLOCKS_CLIENT = 'https://api.thegraph.com/subgraphs/name/dextopswap/blocks'
export const BLOCKS_CLIENT_ETH = 'https://graph.pulsechain.com/subgraphs/name/pulsechain/blocks'
export const STABLESWAP_SUBGRAPH_CLIENT = 'https://api.thegraph.com/subgraphs/name/dextopswap/exchange-stableswap'
export const GRAPH_API_NFTMARKET = 'https://api.thegraph.com/subgraphs/name/dextopswap/nft-market'
export const GRAPH_HEALTH = 'https://api.thegraph.com/index-node/graphql'

export const TC_MOBOX_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/dextopswap/trading-competition-v3'
export const TC_MOD_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/dextopswap/trading-competition-v4'

export const BIT_QUERY = 'https://graphql.bitquery.io'

export const ACCESS_RISK_API = '/api/risk'

export const CELER_API = 'https://api.celerscan.com/scan'

export const INFO_CLIENT_WITH_CHAIN = {
  [ChainId.ETHEREUM]: INFO_CLIENT_ETH,
}

export const BLOCKS_CLIENT_WITH_CHAIN = {
  [ChainId.ETHEREUM]: BLOCKS_CLIENT_ETH,
}

export const ASSET_CDN = 'https://assets.dextopswap.finance'

export const V3_SUBGRAPH_URLS = {
  [ChainId.ETHEREUM]: 'https://server1.pulseswap.org/subgraphs/name/dextop/V3-dex',
} satisfies Record<ChainId, string | null>

export const TRADING_REWARD_API = 'https://dextop-trading-fee-rebate-api.dextopswap.com/api/v1'

export const QUOTING_API = `${process.env.NEXT_PUBLIC_QUOTING_API}/v0/quote`

export const FARMS_API = 'https://farms-api.dextopswap.com'

export const MERCURYO_WIDGET_ID = process.env.NEXT_PUBLIC_MERCURYO_WIDGET_ID || '95a003f2-354a-4396-828a-1126d56e4e13'
