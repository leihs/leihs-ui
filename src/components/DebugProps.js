import React, { Component } from 'react'

function jsonReplacer(_key, value) {
  // react elements (like `props.children`) can not be stringified and are not usefull to look at, so exclude them:
  if (React.isValidElement(value)) return '[[[ React element ]]]'
  return value
}

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
          <mark>{JSON.stringify(this.props, jsonReplacer, 2)}</mark>
        </pre>
      </div>
    )
  }
}

export default DebugProps
