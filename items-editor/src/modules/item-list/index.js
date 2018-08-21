import React from 'react'
import { ListSidebar } from './styled'
import ItemCategories from './components/item-categories'
import List from './components/list'

const ItemList = () => (
  <ListSidebar>
    <ItemCategories />
    <List />
  </ListSidebar>
)

export default ItemList
