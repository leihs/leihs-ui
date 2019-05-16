import React, { Component } from 'react'
import cx from 'classnames'
import f from 'lodash'
import { breakLinesReact } from '../components/Util'

class FlashMessages extends Component {
  render() {
    const { messages, className, messageClasses } = this.props

    if (f.isEmpty(messages)) return false

    return (
      <div className={cx(className, 'ui-flash-messages')}>
        {f.map(messages, ({ message, level = 'info' }, i) => {
          if (f.isEmpty(message) || !f.isString(message)) return false
          const lines = message.split('\n')
          level = mapLevel(level)
          const firstLine = lines.slice(0, 1)
          const restLines = breakLinesReact(lines.slice(1))
          return (
            <div
              key={i}
              className={cx(
                'alert fade show',
                `alert-${level} bg-${level} border-${level} text-light`,
                'text-center',
                messageClasses
              )}
              role="alert"
            >
              <p
                className={cx('font-weight-bold', {
                  'mb-0': f.isEmpty(restLines)
                })}
              >
                {firstLine}
              </p>
              {!f.isEmpty(restLines) && <p className="small">{restLines}</p>}
            </div>
          )
        })}
      </div>
    )
  }
}

FlashMessages.defaultProps = {
  textClass: 'h3'
}

export default FlashMessages

const mapLevel = level => {
  const levelMap = {
    error: 'danger'
  }
  return levelMap[level] || level
}
