const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const assert = chai.assert
const app = require('../app')
const { describe, it } = require('mocha')

describe('# Test Suite', function () {
  it('# Returns html landing page', async function () {
    const res = await chai.request(app)
      .get('/')
    assert.equal(res.status, 200)
    assert.include(res.text, 'Split Sheet Generator')
    assert.include(res.text, 'split-sheet-gpt/project')
  })

  it('# Returns api status payload', async function () {
    const res = await chai.request(app)
      .get('/api/status')
    assert.equal(res.body.user, 'none')
  })
})
