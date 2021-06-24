import React from 'react'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function DownloadLink({ children, href, className, ...restProps }) {
  const linkProps = { href, className: cx(className), ...restProps }
  return (
    <a {...linkProps}>
      <FontAwesomeIcon icon={faDownload} /> {children}
    </a>
  )
}
