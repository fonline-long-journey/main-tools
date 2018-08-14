import styled from 'styled-components'

import { Layout } from 'ui/components/Layout'

export const InitContainer = styled(Layout)`
  background-color: ${({ theme }) => theme.color.darkerBlueGray};
  justify-content: center;
  align-items: center;
`

export const SpinnerContainer = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
`

export const LoadingMessage = styled.div`
  color: ${({ theme }) => theme.color.textWhite};
  flex-shrink: 0;
  flex-grow: 0;
  margin-top: 18px;
  font-size: 20px;
`
