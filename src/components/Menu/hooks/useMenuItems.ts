import useTheme from 'hooks/useTheme'
import { useActiveChainId } from 'hooks/useActiveChainId'
import React, { useMemo } from 'react'
import config, { ConfigMenuDropDownItemsType } from '../config/config'
import mobile from '../config/mobile'
import socials from '../config/socials'

export type UseMenuItemsParams = {
  onClick?: (e: React.MouseEvent<HTMLElement>, item: ConfigMenuDropDownItemsType) => void
}

export const useMenuItems = () => {
  const { chainId } = useActiveChainId()
  const { isDark } = useTheme()

  const menuItems = useMemo(() => {
    return config(isDark, chainId)
  }, [isDark, chainId])

  const mobileItems = useMemo(() => {
    return mobile(chainId)
  }, [chainId])

  const socialItems = useMemo(() => {
    return socials(chainId)
  }, [chainId])

  return useMemo(() => {
    return { menuItems, mobileItems, socialItems }
  }, [menuItems, mobileItems, socialItems])
}
