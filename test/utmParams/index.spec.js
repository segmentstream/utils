import { assert } from 'chai'
import utmParams from '../../src/utmParams'

const url = 'https://site.ru/?utm_source=vk&utm_medium=cpc&utm_campaign=retergeting1&utm_content=1212&utm_term=site'
const expectedUTMs = {
  content: '1212',
  medium: 'cpc',
  name: 'retergeting1',
  source: 'vk',
  term: 'site'
}

describe('#utmParams', () => {
  it('should get right utmParams', async () => {
    const UTMs = utmParams(url)
    assert.deepEqual(expectedUTMs, UTMs)
  })
})
