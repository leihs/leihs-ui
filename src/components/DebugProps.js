import React, { Component } from 'react'

class DebugProps extends Component {
  render() {
    return (
      <div>
        <h1>
          <mark>
            <b>DEBUG</b> props
          </mark>
        </h1>
        <pre>{JSON.stringify(this.props, 0, 2)}</pre>
      </div>
    )
  }
}

export default DebugProps
