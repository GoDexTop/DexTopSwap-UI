import { ChainId } from 'config/chains'

export default {
  masterChef: {
    [ChainId.ETHEREUM]: '0xb29729d7b173281e4b7a9620f4277828a1685c6d',
  },
  multiCall: {
    [ChainId.ETHEREUM]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
  nftPositionManager: {
    [ChainId.ETHEREUM]: '0x2A40FB22B62D75ECD52b7A1D44ee6c4D338a9BA1',
  },
  masterChefV3: {
    [ChainId.ETHEREUM]: '0x556B9306565093C855AEA9AE92A594704c2Cd59e',
  },
} as const satisfies Record<string, Record<number, `0x${string}`>>
