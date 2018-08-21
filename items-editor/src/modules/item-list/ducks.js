// @flow
import { createReducer } from 'redux-act'
import createAction from 'helpers/redux/create-action'

export const STATE_KEY = 'itemList'

export type Category = {
  id: number | string,
  name: string,
}

type Categories = {
  [id: string]: Category,
}

type State = {
  selected: string | null,
  categories: Categories,
}

export const selectCategory = createAction(`${STATE_KEY}/selectCategory`)
export const setCategories = createAction(`${STATE_KEY}/setCategories`)

const initialState: State = {
  selected: null,
  categories: {},
}

const ItemListReducer = createReducer(
  {
    [selectCategory]: (state, { id }) => ({ ...state, selected: id }),
    [setCategories]: (state, { categories }) => ({ ...state, categories }),
  },
  initialState,
)

export default ItemListReducer
