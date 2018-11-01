import React from 'react'
import renderer from 'react-test-renderer'

import Hr from './Hr'

const examples = [
  {
    title: 'without inner text',
    content: (
      <div>
        <Hr />
      </div>
    )
  },
  {
    title: 'with inner text',
    content: (
      <div>
        <Hr>Inner Text</Hr>
      </div>
    )
  }
]

examples.forEach(({ name, content }) => {
  it(`${name}: renders correctly`, () => {
    expect(renderer.create(content).toJSON()).toMatchSnapshot()
  })
})
