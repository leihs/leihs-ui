import React, { Component } from 'react'
import cx from 'classnames'
import f from 'lodash'

class FlashMessages extends Component {
  render() {
    const { flashMessages } = this.props

    if (f.isEmpty(flashMessages)) return false

    return (
      <div className="flash XXXsticky-top">
        {f.map(flashMessages, ({ message = '', level = 'info' }, i) => {
          const lines = message.split('\n')
          level = mapLevel(level)
          return (
            <div
              key={i}
              className={cx(
                `alert-${level} bg-${level} border-${level} text-light `,
                'alert fade show',
                'mb-0 rounded-0',
                'text-center lead'
              )}
              role="alert"
            >
              <strong className="font-weight-bold">{lines.slice(0, 1)}</strong>
              <br />
              {breakLinesReact(lines.slice(1))}
            </div>
          )
        })}
      </div>
    )
  }
}

export default FlashMessages

const mapLevel = level => {
  const levelMap = {
    error: 'danger'
  }
  return levelMap[level] || level
}

const breakLinesReact = text =>
  (f.isArray(text) ? text : text.split('\n')).map((item, i) => (
    <React.Fragment key={i}>
      {item}
      <br />
    </React.Fragment>
  ))
