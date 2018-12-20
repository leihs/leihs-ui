import React, { Component } from 'react'

import RootPage from '../components/RootPage'
// import DebugProps from '../components/DebugProps'

// const LEIHS_GREEN = '#afec81'
// const APP_COLOR = LEIHS_GREEN
const APP_COLOR = 'gray'

const exampleNavbarParams = {
  appTitle: 'leihs',
  appColor: null,
  me: false,
  appMenu: null,
  subApps: false
}

// FIXME: import from file… this serves from legacy app(!)
const splashImage =
  '/assets/leihs-62b57b03ec5abd5e5fa3e6c35fde8a782419982d2cdd771fa8fba6cd0ab63d41.png'

// NOTE: forces inlining!
// TODO: configure static assets and dont inine this
/* eslint-disable-next-line import/no-webpack-loader-syntax  */
// const splashImage = require('url-loader?limit=100000000!../legacy/assets/images/splash.jpg')

const exampleProps = {
  // flashMessages: [
  //   {
  //     level: 'info',
  //     message: 'Sie sind nun ausgeloggt.'
  //   }
  // ],
  navbar: {
    config: { ...exampleNavbarParams, appColor: APP_COLOR }
  },
  splash: {
    title: 'Geräte-Ausleihe und Inventarverwaltungssystem',
    text: 'Inventar verwalten, Gegenstände reservieren und abholen',
    image: splashImage
  },
  footer: {
    appName: 'leihs',
    appVersion: '5.0.0',
    appVersionLink: '/release'
  }
}

class HomePage extends Component {
  render(props = this.props) {
    return (
      <React.Fragment>
        <RootPage {...exampleProps} />

        {/* <DebugProps {...props} /> */}
      </React.Fragment>
    )
  }
}

export default HomePage
