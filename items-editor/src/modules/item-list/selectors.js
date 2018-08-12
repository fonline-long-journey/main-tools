import { createSelector } from 'reselect'
import { values, pipe } from 'ramda'
import { STATE_KEY } from './ducks'

const getCategories = state => state[STATE_KEY].categories
const getSelected = state => state[STATE_KEY].selected

export const categoriesSelector = createSelector(
  [getCategories, getSelected],
  (categories, selected) => pipe(
    categories => (selected
      ? {
        ...categories,
        [selected]: { ...categories[selected], isSelected: true },
      }
      : categories),
    enhancedCategories => values(enhancedCategories),
  )(categories),
)
