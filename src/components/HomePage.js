import React, { Component } from 'react'

import Navbar from './Navbar'
import DebugProps from './DebugProps'

class HomePage extends Component {
  render(props = this.props) {
    return (
      <React.Fragment>
        <Navbar {...props.navbar} />
        <DebugProps {...props} />
      </React.Fragment>
    )
  }
}

export default HomePage
