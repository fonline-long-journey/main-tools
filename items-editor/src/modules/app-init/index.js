// @flow
import React from 'react'
import { connect } from 'react-redux'
import Spinner from '@atlaskit/spinner'
import { Redirect } from 'react-router-dom'
import {
  forEachObjIndexed, mapObjIndexed, pipe, values, groupBy,
} from 'ramda'
import { parsedItems, saveItem } from 'data/proto-items'
import { setCategories } from 'modules/item-list/ducks'
import { InitContainer, SpinnerContainer, LoadingMessage } from './styled'

const CAT_NAMES = {
  1: 'Armor',
  2: 'Consumables',
  3: 'Weapons',
  4: 'Ammo',
  5: 'Misc',
  6: 'Transport',
  7: 'Keycards',
  8: 'Containers',
  9: 'Doors',
  10: 'Portals',
  11: 'Env objects',
  12: 'Walls',
  13: 'No idea',
}

const saveItemsToIDB = () => {
  forEachObjIndexed(saveItem, parsedItems)
}

const byCategoryName = category => CAT_NAMES[category.proto.Type] || 'unknown'

const addMeta = (itemArray, key) => ({
  items: [...itemArray],
  id: key,
  name: key,
})

const getCategories = () => pipe(
  values,
  groupBy(byCategoryName),
  mapObjIndexed(addMeta),
)(parsedItems)

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
    const { initCategories } = this.props
    saveItemsToIDB()
    const namedCategories = getCategories()
    initCategories({ categories: namedCategories })
    setTimeout(() => {
      this.setState({
        processingComplete: true,
      })
    }, 1500)
  }

  render() {
    const { processingComplete } = this.state
    return processingComplete ? <Redirect to="/main" /> : <Loading />
  }
}

export default connect(
  null,
  {
    initCategories: setCategories,
  },
)(AppInit)
