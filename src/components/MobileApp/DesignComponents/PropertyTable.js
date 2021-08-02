import React from 'react'
import cx from 'classnames'

export default function PropertyTable({ properties, className, ...restProps }) {
  return (
    <table className={className} {...restProps}>
      <tbody>
        {(properties || []).map(({ key, value }, i) => {
          const paddingClassName = i === 0 ? '' : 'pt-2'
          return (
            <tr key={i}>
              <td className={cx('fw-light pe-3', paddingClassName)}>{key}</td>
              <td className={paddingClassName}>{value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
