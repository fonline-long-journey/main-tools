import { combineReducers } from 'redux'
import ItemListReducer from 'modules/item-list/ducks'

const RootReducer = combineReducers({
  itemList: ItemListReducer,
})

export default RootReducer
