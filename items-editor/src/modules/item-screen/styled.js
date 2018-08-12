import styled from 'styled-components'
import { Layout } from 'ui/components/Layout'

export const Container = styled(Layout)`
  background-color: ${({ theme }) => theme.color.darkerGrey};
`
