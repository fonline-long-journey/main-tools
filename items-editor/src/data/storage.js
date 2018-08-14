import localForage from 'localforage'

localForage.config({
  driver: localForage.INDEXEDDB,
  name: 'ItemsEditor',
  version: 1.0,
  storeName: 'items',
  description: 'Parsed items JSON',
})

export default localForage
