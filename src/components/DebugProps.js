import React, { Component } from 'react'

class DebugProps extends Component {
  render() {
    return (
      <div className="card m-3 p-4">
        <h1 className="h3">
          <mark>
            DEBUG <code>props</code>
          </mark>
        </h1>
        <pre>
          <mark>{JSON.stringify(this.props, 0, 2)}</mark>
        </pre>
      </div>
    )
  }
}

export default DebugProps
