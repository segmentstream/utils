import { assert } from 'chai'
import { getProp, setProp } from '../../src/dotProp'

const exampleObject = { levelOne: { paramOne: 'value1' }, array: [{ param: 'value2' }] }

describe('#dotProp', () => {
  it('should successfull set prop', () => {
    assert.ok(exampleObject.levelOne.foo === undefined)
    setProp(exampleObject, 'levelOne.foo', 'bar')
    assert.ok(exampleObject.levelOne.foo === 'bar')
  })

  it('should successfull set prop to array', () => {
    assert.ok(exampleObject.levelOne[0] === undefined)
    setProp(exampleObject, 'levelOne[0].foo', 'bar')
    assert.ok(exampleObject.levelOne[0].foo === 'bar')
  })

  it('should successfull get prop', () => {
    assert.ok(getProp(exampleObject, 'levelOne.paramOne') === 'value1')
  })

  it('should successfull get prop from array', () => {
    assert.ok(getProp(exampleObject, 'array[0].param') === 'value2')
  })

  it('should get prop with empty name without errors', () => {
    assert.ok(getProp(exampleObject, '') === undefined)
    assert.ok(getProp(exampleObject) === undefined)
  })
})
