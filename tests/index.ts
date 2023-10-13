import {assert} from '@open-wc/testing'
import '../src/js/index.js'

describe('my tests', () => {
  it("Set's the heading of a website to 'Inspirational Quote' in initial load", () => {
    const h1 = document.querySelector<HTMLHeadingElement>('h1')
    assert.equal(h1?.textContent, '"Inspirational Quote"')
  })
})
