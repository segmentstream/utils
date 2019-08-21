import { assert } from 'chai'
import { parse, stringify } from '../../src/queryString'

const queryString = 'utm_campaign=retergeting1&utm_content=1212&utm_medium=cpc&utm_source=vk&utm_term=site'
const queryStringObject = {
  utm_campaign: 'retergeting1',
  utm_content: '1212',
  utm_medium: 'cpc',
  utm_source: 'vk',
  utm_term: 'site'
}

describe('#size', () => {
  it('should successfully parse query string', async () => {
    const parsedQueryString = parse(queryString)
    assert.deepEqual(queryStringObject, parsedQueryString)
  })

  it('should successfully stringify query object', async () => {
    const stringifyQueryObject = stringify(queryStringObject)
    assert.ok(queryString === stringifyQueryObject)
  })
})
