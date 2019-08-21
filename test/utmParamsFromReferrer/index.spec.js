import { assert } from 'chai'
import utmParamsFromReferrer, { setIgnoreSameDomainCheck } from '../../src/utmParamsFromReferrer'
import referrers from './referrers.stub'

describe('#utmParamsFromReferrer', () => {
  it('should genetate right utmParams', async () => {
    setIgnoreSameDomainCheck(true)
    for (const referrer of referrers) {
      const utmParams = utmParamsFromReferrer(referrer.in)
      assert.deepEqual(referrer.out, utmParams)
    }
  })
})
