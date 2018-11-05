import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import DebugProps from '../components/DebugProps'

class HomePage extends Component {
  render(props = this.props) {
    return (
      <React.Fragment>
        <Navbar {...props.navbar} />
        <h1>HomePage</h1>
        <DebugProps {...props} />
      </React.Fragment>
    )
  }
}

export default HomePage
