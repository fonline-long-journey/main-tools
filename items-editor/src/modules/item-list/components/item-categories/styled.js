import styled from 'styled-components'
import Button from '@atlaskit/button'
import { Layout } from 'ui/components/Layout'

export const Container = styled(Layout)`
  flex-shrink: 0;
  flex-grow: 0;
  height: fit-content;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  border-bottom: ${({ theme }) => `2px solid ${theme.color.darkestGrey}`};
`

export const StyledButton = styled(Button)`
  color: ${({ theme, isSelected }) => (isSelected
    ? `${theme.color.textWhite} !important`
    : `${theme.color.lighterBlueGray} !important`)};
  background-color: ${({ theme, isSelected }) => isSelected && `${theme.color.darkestBlueGray} !important`};
`
