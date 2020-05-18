import f from 'lodash'
import React, { Component } from 'react'

import RootPage from '../components/RootPage'
// import DebugProps from '../components/DebugProps'
import { Translator as T } from '../locale/translate'

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
// configure static assets and `require` the asset!
const splashImageDefault = '/assets/leihs-62b57b03ec5abd5e5fa3e6c35fde8a782419982d2cdd771fa8fba6cd0ab63d41.png'

const defaultProps = {
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
    title: 'Title',
    text: 'Subtitle',
    image: splashImageDefault
  },
  footer: {
    appName: 'leihs',
    appVersion: 'dev',
    appVersionLink: '/release'
  }
}

class HomePage extends Component {
  render(props = this.props) {
    const t = T(props.navbar.config.locales)
    const rootProps = f.merge(defaultProps, props, {
      splash: {
        title: t('homepage_hero_title'),
        text: t('homepage_hero_subtitle')
      }
    })
    return (
      <React.Fragment>
        <RootPage {...rootProps} />
        {/* <DebugProps {...props} /> */}
      </React.Fragment>
    )
  }
}

export default HomePage
