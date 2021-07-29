import React from 'react'
import { action } from '@storybook/addon-actions'
import DownloadLink from './DownloadLink'
import PageLayoutMock from '../StoryUtils/PageLayoutMock'

export default {
  title: 'MobileApp/DesignComponents/Download Link',
  component: DownloadLink,
  parameters: { layout: 'fullscreen' }
}

export const downloadLink = ({ onClick }) => {
  function handleClick(e) {
    e.preventDefault()
    onClick(e)
  }
  return (
    <PageLayoutMock>
      <div className="my-3">
        <DownloadLink onClick={handleClick} href="some/route">
          Plain
        </DownloadLink>
      </div>
      <div className="my-3">
        <DownloadLink onClick={handleClick} href="some/route">
          With <b>JSX</b> children as label
        </DownloadLink>
      </div>
      <div className="my-3">
        <DownloadLink
          onClick={handleClick}
          href="some/route"
          className="btn btn-outline-primary"
          title="Hello"
          style={{ border: '1px dashed pink' }}
        >
          With arbitrary attributes
        </DownloadLink>
      </div>
    </PageLayoutMock>
  )
}

downloadLink.args = {
  onClick: action('click')
}
