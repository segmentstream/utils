import { assert } from 'chai'
import cleanObject from '../../src/cleanObject'

const exampleObject = {
  a: undefined,
  b: null,
  c: false,
  d: '',
  e: {
    a: undefined,
    b: null,
    c: false,
    d: '',
    e: {
      a: undefined,
      b: null,
      c: false
    }
  }
}

const expextedCleanedObject = {
  c: false,
  e: {
    c: false,
    e: {
      c: false
    }
  }
}

describe('# cleanObject', () => {
  it('should successfull clean object', async () => {
    const cleanedObject = cleanObject(exampleObject)
    assert.deepEqual(expextedCleanedObject, cleanedObject)
  })
})
