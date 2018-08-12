import React from 'react'
import styled from 'styled-components'
import { Layout } from 'ui/components/Layout'
import ItemList from 'modules/item-list'

const Header = styled(Layout)`
  width:: 100%;
  height: 30px;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: ${({ theme }) => theme.color.darkestGrey};
  padding-left: 50px;
  font-size: 18px;
  color: #fff;
  justify-content: center;
`

const HorizontalContainer = styled(Layout)`
  flex-direction: row;
  flex-wrap: nonowrap;
`

const MainScreen = () => (
  <Layout>
    <Header> Items Editor</Header>
    <HorizontalContainer>
      <ItemList />
    </HorizontalContainer>
  </Layout>
)

export default MainScreen
