import { Text, TextProps } from 'components'

export interface PercentProps extends TextProps {
  value: number | undefined
}

const Percent: React.FC<React.PropsWithChildren<PercentProps>> = ({ value, ...rest }) => {
  if (!value || Number.isNaN(value)) {
    return <Text {...rest}>-</Text>
  }

  const isNegative = value < 0

  return (
    <Text {...rest} color={isNegative ? 'warning2' : 'success'}>
      {isNegative ? '↓' : '↑'}
      {Math.abs(value).toFixed(2)}%
    </Text>
  )
}

export default Percent
