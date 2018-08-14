// @flow
import React from 'react'
import Spinner from '@atlaskit/spinner'
import { Redirect } from 'react-router-dom'
import { InitContainer, SpinnerContainer, LoadingMessage } from './styled'

const Loading = () => (
  <InitContainer>
    <SpinnerContainer>
      <Spinner invertColor size="xlarge" />
    </SpinnerContainer>
    <LoadingMessage>Processing FOnline items JSON, suffering...</LoadingMessage>
  </InitContainer>
)

type State = {
  processingComplete: boolean,
}

class AppInit extends React.Component<void, State> {
  state = {
    processingComplete: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        processingComplete: true,
      })
    }, 5000)
  }
  render() {
    const { processingComplete } = this.state
    return processingComplete ? <Redirect to="/main" /> : <Loading />
  }
}

export default AppInit
