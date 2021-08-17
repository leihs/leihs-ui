import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function ProgressInfo({ title, info, totalCount, doneCount, small, className, ...restProps }) {
  return (
    <div className={cx('d-flex flex-column gap-1', className)} {...restProps}>
      <div className={cx(small ? 'small' : '')}>{title}</div>
      {totalCount && <Progressbar totalCount={totalCount} doneCount={doneCount} />}
      {info && <div className={cx('fw-light', small ? 'very-small' : 'small')}>{info}</div>}
    </div>
  )
}

ProgressInfo.propTypes = {
  title: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired,
  doneCount: PropTypes.number.isRequired,
  info: PropTypes.node,
  small: PropTypes.bool,
  className: PropTypes.string
}

function Progressbar({ totalCount, doneCount }) {
  if (totalCount === 0) {
    return null
  }
  var percent = Number(doneCount / totalCount).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 })

  return (
    <div className="progress" style={{ height: '0.5rem' }}>
      <div
        className="progress-bar rounded"
        role="progressbar"
        style={{ width: percent }}
        aria-valuenow={doneCount}
        aria-valuemin="0"
        aria-valuemax={totalCount}
      ></div>
    </div>
  )
}
