import React from 'react'

import HomePage from '../pages/HomePage'
import sharedNavbarProps from './_sharedNavbarProps.json'

export default {
  title: 'Features/HomePage',
  parameters: { layout: 'fullscreen' }
}
const splashImage = require('../legacy/assets/images/splash.jpg')

export const loggedOut = () => (
  <HomePage navbar={sharedNavbarProps} splash={{ image: splashImage }} csrfToken={{ value: 'xxx' }} />
)

// loggedOut.storyName = 'to Storybook'
