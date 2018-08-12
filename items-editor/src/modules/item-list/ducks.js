// @flow
import { createReducer } from 'redux-act'
import createAction from 'helpers/redux/create-action'

export const STATE_KEY = 'itemList'

export type Category = {
  id: number | string,
  name: string,
  isSelected?: boolean,
}

type Categories = {
  [id: string]: Category,
}

type State = {
  selected: string | null,
  categories: Categories,
}

const categoriesProto = {
  '1': { id: 1, name: 'Weapons' },
  '2': { id: 2, name: 'Weapons' },
  '3': { id: 3, name: 'Weapons' },
  '4': { id: 4, name: 'Weapons' },
  '5': { id: 5, name: 'Weapons' },
  '6': { id: 6, name: 'Weapons' },
  '7': { id: 7, name: 'Weapons' },
  '8': { id: 8, name: 'Weapons' },
  '9': { id: 9, name: 'Weapons' },
  '10': { id: 10, name: 'Weapons' },
}

export const selectCategory = createAction(`${STATE_KEY}/selectCategory`)

const initialState: State = {
  selected: null,
  categories: { ...categoriesProto },
}

const ItemListReducer = createReducer(
  {
    [selectCategory]: (state, { id }) => ({ ...state, selected: id }),
  },
  initialState,
)

export default ItemListReducer
