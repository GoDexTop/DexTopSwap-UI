import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | dextop',
  defaultTitle: 'dextop',
  description:
    'Discover dextop, the leading DEX on Pulsechain with the best rewarding in DeFi.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@',
    site: '@',
  },
  openGraph: {
    title: 'dextop - A next evolution DeFi exchange on Arbitrum One',
    description:
      'The most popular AMM on Ethereum!',
    images: [{ url: 'https://dex.dextop.pro/logo.png' }],
  },
}
