import React from 'react'
import cx from 'classnames'
import Icon, { iconDownload } from './Icons'

export default function DownloadLink({ children, href, className, ...restProps }) {
  const linkProps = { href, className: cx('download-link', className), ...restProps }
  return (
    <a {...linkProps}>
      <Icon icon={iconDownload} className="download-link__icon" />
      {children}
    </a>
  )
}
