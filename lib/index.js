'use strict'

module.exports = ({ electronStore, electronStoreOpts } = {}) => {
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
