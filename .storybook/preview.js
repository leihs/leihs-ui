import { addParameters, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import './fake-time'

// add global CSS styles
import '../src/theme/bootstrap-leihs.css'

// addDecorator(withInfo)

addParameters({
  viewport: {
    // viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
    // defaultViewport: 'mobile2'
  }
})
