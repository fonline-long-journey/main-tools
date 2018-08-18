import localForage from 'data/storage'
import itemsJson from './rev_items'

const parsedItems = JSON.parse(JSON.stringify(itemsJson))

const saveItem = (value, key) => {
  localForage.setItem(key, value)
}

export { parsedItems, saveItem }
