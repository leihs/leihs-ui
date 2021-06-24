import React from 'react'
import DownloadLink from './DownloadLink'

export default {
  title: 'MobileApp/DesignComponents/Download Link',
  component: DownloadLink
}

export const downloadLink = () => {
  return (
    <>
      <div className="my-3">
        <DownloadLink href="">Plain</DownloadLink>
      </div>
      <div className="my-3">
        <DownloadLink href="">
          With <b>JSX</b> children as label
        </DownloadLink>
      </div>
      <div className="my-3">
        <DownloadLink href="" className="btn btn-outline-primary">
          Styled as Bootstrap button
        </DownloadLink>
      </div>
      <div className="my-3">
        <DownloadLink href="" target="_blank" style={{ color: 'silver' }}>
          With arbitrary attributes (restProps)
        </DownloadLink>
      </div>
    </>
  )
}
