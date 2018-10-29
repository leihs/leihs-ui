import React from 'react'
import { LeihsPage } from '../../components/styleguide'
import Navbar, { BASE_COLOR as navbarBaseColor } from '../../components/Navbar'

import { exampleParams } from './dummy'

// http://clrs.cc
const CLRS = [
  '#001f3f',
  '#0074D9',
  '#7FDBFF',
  '#39CCCC',
  '#3D9970',
  '#2ECC40',
  '#01FF70',
  '#FFDC00',
  '#FF851B',
  '#FF4136',
  '#85144b',
  '#F012BE',
  '#B10DC9',
  '#111111',
  '#AAAAAA',
  '#DDDDDD'
]

const swatchStyle = {
  height: '1.5em',
  width: '50%',
  float: 'left',
  paddingLeft: '0.5em',
  textShadow: '1px 0 1px #ffffff91'
}

const NavbarDummyPage = () => {
  const examples = [...CLRS].map(color => ({
    ...exampleParams,
    appColor: color
  }))

  return (
    <LeihsPage>
      <header className="text-center">
        <h1 className="display-4">Navbar Colors</h1>
        <p className="lead">
          same example data as <a href="./dummy">./dummy</a>, but with using
          each color from <a href="http://clrs.cc">COLORS</a> as a{' '}
          <code>tint</code>. <code>base</code> color is the purple from{' '}
          <a href="https://getbootstrap.com">bootstrap {"doc's"} purple</a>.
          <br />
          <b>NOTE:</b> the <code>tint</code> is applied while keeping{' '}
          <a href="https://www.w3.org/TR/WCAG20/#relativeluminancedef">
            luminosity/relative luminance
          </a>{' '}
          and saturation from <code>base</code> color.
        </p>
      </header>

      {examples.map(config => (
        <>
          <div style={{ ...swatchStyle, background: `${navbarBaseColor}` }}>
            base
          </div>
          <div style={{ ...swatchStyle, background: `${config.appColor}` }}>
            tint
          </div>
          <Navbar config={config} />
          <hr />
        </>
      ))}
    </LeihsPage>
  )
}

export default NavbarDummyPage
