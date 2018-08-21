import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { itemsSelector } from '../../selectors'
import { ScrollWrapper, ItemContainer, TitleContainer } from './styled'

const List = ({ items }) => (
  <ScrollWrapper>
    {map(
      item => (
        <ItemContainer>
          <TitleContainer>{item.title}</TitleContainer>
        </ItemContainer>
      ),
      items || [],
    )}
  </ScrollWrapper>
)

export default connect(
  state => ({
    items: itemsSelector(state),
  }),
  null,
)(List)
