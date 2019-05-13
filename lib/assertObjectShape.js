const isPlainObject = require('lodash.isplainobject')

module.exports = (object, requiredKeys = [], callback) => {
  if (!isPlainObject(object)) {
    throw new Error('A plain object is required to assert shape.')
  }
  if (!requiredKeys.length) return
  return requiredKeys.forEach(requiredKey => {
    const keyExist = Object.keys(object).includes(requiredKey)
    if (!keyExist) {
      if (callback) return callback(requiredKey)
      throw new Error(`Key "${requiredKey}" is missing in object.`)
    }
    return
  })
}
