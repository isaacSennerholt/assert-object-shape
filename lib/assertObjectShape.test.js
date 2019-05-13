jest.mock('lodash.isplainobject')

const assertObjectShape = require('./assertObjectShape.js')
const isPlainObject = require('lodash.isplainobject')

describe('assert shape of plain object', () => {
  test('missing plain object', () => {
    isPlainObject.mockImplementation(() => false)
    const plainObject = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@whatnow.com'
    }
    const requiredKeys = ['first_name', 'last_name', 'email']
    expect.assertions(1)
    expect(() => assertObjectShape(null, requiredKeys)).toThrow()
  })

  test('missing email key', () => {
    isPlainObject.mockImplementation(() => true)
    const plainObject = {
      first_name: 'John',
      last_name: 'Doe'
    }
    const requiredKeys = ['first_name', 'last_name', 'email']
    expect.assertions(1)
    expect(() => assertObjectShape(plainObject, requiredKeys)).toThrow()
  })

  test('empty key list', () => {
    isPlainObject.mockImplementation(() => true)
    jest.mock('lodash.isplainobject', () => jest.fn(() => true))
    const plainObject = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@whatnow.com'
    }
    const requiredKeys = []
    expect.assertions(1)
    expect(assertObjectShape(plainObject, requiredKeys)).toBe(undefined)
  })

  test('plain object with required keys', () => {
    isPlainObject.mockImplementation(() => true)
    const plainObject = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@whatnow.com'
    }
    const requiredKeys = ['first_name', 'last_name', 'email']
    expect.assertions(1)
    expect(assertObjectShape(plainObject, requiredKeys)).toBe(undefined)
  })
})
