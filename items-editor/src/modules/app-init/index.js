import React from 'react'
import Spinner from '@atlaskit/spinner'
import { InitContainer, SpinnerContainer, LoadingMessage } from './styled'

class AppInit extends React.Component {
  render() {
    return (
      <InitContainer>
        <SpinnerContainer>
          <Spinner invertColor size="xlarge" />
        </SpinnerContainer>
        <LoadingMessage>
          Processing FOnline items JSON, suffering...
        </LoadingMessage>
      </InitContainer>
    )
  }
}

export default AppInit
