import styled from 'styled-components'
import { Layout } from 'ui/components/Layout'

export const ScrollWrapper = styled(Layout)`
  overflow-y: auto;
  background-color: ${({ theme }) => theme.color.mediumBlueGray};
  padding-right: 12px;
`

export const ItemContainer = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: 7px;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.lighterBlueGray}`};
  cursor: pointer;
`

export const NameContainer = styled.div`
  height: 100%
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  font-size: 13px;
`

export const TitleContainer = styled(NameContainer)`
  padding-left: 6px;
  font-size: 12px;
`
