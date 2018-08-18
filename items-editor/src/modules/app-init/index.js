// @flow
import React from 'react'
import Spinner from '@atlaskit/spinner'
import { Redirect } from 'react-router-dom'
import { forEachObjIndexed } from 'ramda'
import { parsedItems, saveItem } from 'data/proto-items'
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
    forEachObjIndexed(saveItem, parsedItems)
    this.setState({
      processingComplete: true,
    })
  }
  render() {
    const { processingComplete } = this.state
    return processingComplete ? <Redirect to="/main" /> : <Loading />
  }
}

export default AppInit
