import React from 'react'
import renderer from 'react-test-renderer'

import VisuallyHidden from './VisuallyHidden'

const examples = [
  {
    content: (
      <form>
        <VisuallyHidden if={false}>
          Inner Text <input type="text" />
        </VisuallyHidden>
      </form>
    )
  },
  {
    content: (
      <form>
        <VisuallyHidden if={true}>
          Inner Text <input type="text" />
        </VisuallyHidden>
      </form>
    )
  }
]

examples.forEach(({ name, content }) => {
  it(`${name}: renders correctly`, () => {
    expect(renderer.create(content).toJSON()).toMatchSnapshot()
  })
})
