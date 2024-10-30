'use strict'
import Store from 'electron-store'
console.log('Store')
console.log(Store)

module.exports = ({ electronStore, electronStoreOpts } = {}) => {
  console.log('electronStore')
  console.log(electronStore)
  const store = electronStore

  return {
    getItem: (key) => {
      return new Promise((resolve) => {
        resolve(store.get(key))
      })
    },
    setItem: (key, item) => {
      return new Promise((resolve) => {
        resolve(store.set(key, item))
      })
    },
    removeItem: (key) => {
      return new Promise((resolve) => {
        resolve(store.delete(key))
      })
    }
  }
}
