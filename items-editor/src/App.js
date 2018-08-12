import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import * as theme from 'ui/theme'
import MainScreen from './modules/main-screen'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainScreen />
      </ThemeProvider>
    )
  }
}

export default App
