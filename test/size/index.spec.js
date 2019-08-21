import { assert } from 'chai'
import size from '../../src/size'

describe('#size', () => {
  it('should return right size of object', async () => {
    const objSize = size({ a: 'a', b: false, c: {} })
    assert.ok(objSize === 3)
  })
})
