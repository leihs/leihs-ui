import React, { Component } from 'react'

class Bold extends Component {
  render() {
    return <pre>{JSON.stringify(this.props, 0, 2)}</pre>
  }
}

export default Bold
