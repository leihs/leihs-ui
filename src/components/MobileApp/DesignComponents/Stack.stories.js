import React from 'react'
import { linkTo } from '@storybook/addon-links'
import Stack from './Stack'

export default {
  title: 'MobileApp/Design Components/Layout/Stack',
  component: Stack
}

const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore'

export const stack = () => {
  return (
    <div>
      <h1>Stack</h1>
      <p className="text-muted">Structures content vertically by space and/or dividers.</p>
      <p className="text-muted">
        <button className="btn btn-light btn-sm" onClick={linkTo('MobileApp/Bootstrap Theme/Spacing')}>
          See also: Theme/Spacing
        </button>
      </p>
      <p className="text-muted">Example with space 4 (typically used with form fields):</p>
      <div className="bg-secondary mb-3">
        <Stack space="4">
          <div className="bg-body">{lorem}</div>
          <div className="bg-body">{lorem}</div>
          <div className="bg-body">{lorem}</div>
        </Stack>
      </div>
      <p className="text-muted">Example with space 5 (typically used with sections in detail or index views):</p>
      <div className="bg-secondary mb-4">
        <Stack space="5">
          <div className="bg-body">{lorem}</div>
          <div className="bg-body">{lorem}</div>
          <div className="bg-body">{lorem}</div>
        </Stack>
      </div>
      <p className="text-muted">(Note: the gray background is only for clarification)</p>
    </div>
  )
}

export const divided = () => {
  return (
    <div>
      <h1>Stack</h1>
      <p className="text-muted">Example with divider and space 3 (typically used with list items):</p>
      <Stack space="3" divided>
        <div>{lorem}</div>
        <div>{lorem}</div>
        <div>{lorem}</div>
      </Stack>
    </div>
  )
}

export const horizontalInset = () => {
  return (
    <div>
      <h1>Stack</h1>
      <p className="text-muted">
        The content area of the page layout has a horizontal inset (padding). The dividers however are edge-to-edge
        (negative margin).
      </p>
      <div className="page-inset-x shadow">
        <div>...</div>
        <div>...</div>
        <Stack space="1" divided>
          <div>{lorem}</div>
          <div>{lorem}</div>
          <div>{lorem}</div>
        </Stack>
        <div>...</div>
        <div>...</div>
      </div>
    </div>
  )
}

export const restProps = () => {
  return (
    <div>
      <h1>Stack</h1>
      <p className="text-muted">RestProps are applied to the item wrappers</p>
      <Stack space="3" className="border border-primary p-1">
        <div>{lorem}</div>
        <div>{lorem}</div>
        <div>{lorem}</div>
      </Stack>
    </div>
  )
}
