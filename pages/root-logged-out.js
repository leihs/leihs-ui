import React from 'react'
// import f from 'lodash'

import RootPage from '../src/components/RootPage'

const exampleNavbarParams = {
  appTitle: 'Leihs',
  appColor: null,
  me: false,
  appMenu: null,
  subApps: false
}
const LEIHS_GREEN = '#afec81'
// FIXME: import from file…
const splashImage =
  'https://ausleihe.zhdk.ch/assets/leihs-62b57b03ec5abd5e5fa3e6c35fde8a782419982d2cdd771fa8fba6cd0ab63d41.png'

const exampleProps = {
  flashMessages: [
    {
      level: 'info',
      message: 'Sie sind nun ausgeloggt.'
    }
  ],
  navbar: {
    config: { ...exampleNavbarParams, appColor: LEIHS_GREEN }
  },
  splash: {
    title: 'Geräte-Ausleihe und Inventarverwaltungssystem',
    text: 'Inventar verwalten, Gegenstände reservieren und abholen',
    image: splashImage
  },
  footer: {
    appName: 'leihs',
    appVersion: '4.19.3'
  }
}

const page = () => <RootPage {...exampleProps} />
export default page
