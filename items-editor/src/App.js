import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as theme from 'ui/theme'
import MainScreen from './modules/main-screen'
import AppInit from './modules/app-init'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={() => <AppInit />} />
        <Route exact path="/main" component={() => <MainScreen />} />
      </Switch>
    </ThemeProvider>
  </Router>
)
export default App
