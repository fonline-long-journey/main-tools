import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import * as theme from 'ui/theme'
import { Layout } from './ui/components/Layout'

const Header = styled(Layout)`
  width:: 100%;
  height: 60px;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: ${({ theme }) => theme.color.darkestGrey};
  padding-left: 50px;
  font-size: 20px;
  color: #fff;
  justify-content: center;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Header>Items Editor</Header>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default App
