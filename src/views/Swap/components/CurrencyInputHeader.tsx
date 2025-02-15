import { Button, Flex, NextLinkFromReactRouter, Text } from 'components'
import { ReactElement } from 'react'
import GlobalSettings from 'components/Menu/GlobalSettings'
import { CurrencyInputHeader as AtomCurrencyInputHeader } from 'components/CurrencyInputHeader'
import { SettingsMode } from 'components/Menu/GlobalSettings/types'
import { useRouter } from 'next/router'

interface Props {
  title: string | ReactElement
}

const CurrencyInputHeader: React.FC<React.PropsWithChildren<Props>> = ({
  title,
}) => {
  const router = useRouter()
  const titleContent = (
    <Flex width="100%" alignItems="center" justifyContent="space-between" flexDirection="row">
      { /* <Flex>
        <Button
          as={NextLinkFromReactRouter}
          to='/swap'
          variant={title === "Swap" ? 'secondary' : 'text'}
          width="70px"
          height="36px"
        >
          <Text>Swap</Text>
        </Button>
        <Button
          as={NextLinkFromReactRouter}
          to='/pool'
          variant={title === "Pool" ? 'secondary' : 'text'}
          width="70px"
          height="36px"
        >
          <Text>Pool</Text>
        </Button>
      </Flex> 
       <Text fontSize="16px" ml="4px">{title}</Text>  */ }
      <Flex justifyContent="end">
        <GlobalSettings color="textSubtle" mr="0" mode={SettingsMode.SWAP_LIQUIDITY} />
      </Flex> 
      <Button
        as={NextLinkFromReactRouter}
        to='/swap'
        variant={router.pathname === "/swap" ? 'text' : 'subtle'}
        width="75%"
        height="36px"
      >
        Swap
      </Button>
      <Button
        as={NextLinkFromReactRouter}
        to='/pool'
        variant={router.pathname === "/pool"  ? 'text' : 'subtle'}
        width="100%"
        height="36px"
      >
        Liquidity
      </Button>
    </Flex>
  )

  return <AtomCurrencyInputHeader title={titleContent} subtitle={<></>} />
}

export default CurrencyInputHeader
