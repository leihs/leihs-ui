import React, { Fragment as F } from 'react'
import renderer from 'react-test-renderer'

import { Let, breakLinesReact } from './Util'

const examples = [
  {
    name: 'Let',
    content: (
      <F>
        {/* TODO: <Let /> should fail*/}
        <Let a="1" b={2}>
          {args => JSON.stringify(args)}
        </Let>
      </F>
    )
  },
  {
    name: 'breakLinesReact',
    content: (
      <F>
        <p>{breakLinesReact()}</p>
        <p>{breakLinesReact('')}</p>
        <p>{breakLinesReact('hello')}</p>
        <p>{breakLinesReact('hello\\nworld')}</p>
        <p>{breakLinesReact('hello\nworld \\n \netc\np\tp')}</p>
      </F>
    )
  }
]

examples.forEach(({ name, content }) => {
  it(`${name}: renders correctly`, () => {
    expect(renderer.create(content).toJSON()).toMatchSnapshot()
  })
})
