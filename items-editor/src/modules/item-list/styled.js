import styled from 'styled-components'
import { Layout } from 'ui/components/Layout'

export const ListSidebar = styled(Layout)`
  background-color: ${({ theme }) => theme.color.darkerBlueGray};
  width: 500px;
  flex-shrink: 0;
  flex-grow: 0;
  border-right: ${({ theme }) => `2px solid ${theme.color.darkestGrey}`};
`
