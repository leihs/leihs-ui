import React from 'react'
import renderer from 'react-test-renderer'

import VisuallyHidden from './VisuallyHidden'

const examples = [
  {
    name: 'hidden when no arg',
    content: (
      <form>
        <VisuallyHidden>
          Inner Text <input type="text" />
        </VisuallyHidden>
      </form>
    )
  },
  {
    name: 'not hidden when `false` arg',
    content: (
      <form>
        <VisuallyHidden if={false}>
          Inner Text <input type="text" />
        </VisuallyHidden>
      </form>
    )
  },
  {
    name: 'hidden when `true` arg',
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
