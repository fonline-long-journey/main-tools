// @flow

import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { Container, StyledButton } from './styled'
import { categoriesSelector } from '../../selectors'
import { selectCategory } from '../../ducks'
import type { Category } from '../../ducks'

const CategoryButton = ({ name, ...props }: Category) => (
  <StyledButton {...props}>{name}</StyledButton>
)

type Props = {
  categories: Category[],
  select: ({ id: string }) => void,
}

const ItemCategories = ({ categories, select }: Props) => (
  <Container>
    {map(
      category => (
        <CategoryButton
          key={category.id}
          onClick={() => select({ id: category.id })}
          {...category}
        />
      ),
      categories,
    )}
  </Container>
)

export default connect(
  state => ({
    categories: categoriesSelector(state),
  }),
  {
    select: selectCategory,
  },
)(ItemCategories)
