import { addParameters } from '@storybook/react'

// add global CSS styles
import '../src/theme/build/bootstrap-leihs.css'
// import '../../theme/bootstrap-leihs.scss'

addParameters({
  viewport: {
    // viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'mobile2'
  }
})
