import { assert } from 'chai'
import { parse } from '../../src/url'

const url = 'https://aaa:bbb@site.ru:444/path?utm_source=vk&utm_medium=cpc&utm_campaign=retergeting1&utm_content=1212&utm_term=site#hash'
const expectedUrlObject = {
  hash: '#hash',
  host: 'site.ru:444',
  hostname: 'site.ru',
  href: 'https://aaa:bbb@site.ru:444/path?utm_source=vk&utm_medium=cpc&utm_campaign=retergeting1&utm_content=1212&utm_term=site#hash',
  pathname: '/path',
  port: '444',
  protocol: 'https:',
  query: 'utm_source=vk&utm_medium=cpc&utm_campaign=retergeting1&utm_content=1212&utm_term=site',
  search: '?utm_source=vk&utm_medium=cpc&utm_campaign=retergeting1&utm_content=1212&utm_term=site'
}

describe('# utmParams', () => {
  it('should get right utmParams', async () => {
    const urlObject = parse(url)
    assert.deepEqual(expectedUrlObject, urlObject)
  })
})
