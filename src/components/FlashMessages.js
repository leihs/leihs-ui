import React, { Component } from 'react'
import cx from 'classnames'
import f from 'lodash'

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
              <p className="font-weight-bold">{lines.slice(0, 1)}</p>
              <p className="small">{lines.slice(1)}</p>
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
