import { assert } from 'chai'
import utmParamsFromReferrer, { setIgnoreSameDomainCheck } from '../../dist/utmParamsFromReferrer'

describe('#src/jobs-scheduler', () => {
  it('should publish messages with correct pattern and projects data to pubsub', async () => {
    setIgnoreSameDomainCheck(true)
    const a = utmParamsFromReferrer('http://aaaaa.aa')
    assert.ok(a)
  })
})
