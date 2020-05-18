import React from 'react'

import HomePage from '../pages/HomePage'
import sharedNavbarProps from './_sharedNavbarProps.json'

export default {
  title: 'Features/HomePage'
}
const splashImage = require('../legacy/assets/images/splash.jpg')

export const loggedOut = () => <HomePage navbar={sharedNavbarProps} splash={{ image: splashImage }} />

// loggedOut.story = {
//   name: 'to Storybook',
// };
