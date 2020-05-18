import React from 'react'

import Navbar, { BASE_COLOR as navbarBaseColor } from './Navbar'
import LeihsPage from '../pages/LeihsPage'

import sharedNavbarProps from '../stories/_sharedNavbarProps.json'
const LEIHS_GREEN = '#afec81'
const exampleParams = {
  ...sharedNavbarProps.config,
  csrfToken: '7d4eeec4-070c-4ea5-a778-85f29d9177e2',
  me: {
    user: {
      id: '5443e104-d80e-497f-bc15-927ff5c2d396',
      firstname: 'Normin',
      lastname: 'Normalo',
      login: 'nnormalo',
      email: 'normin.normalo@zhdk.ch'
      // selectedLocale: '9a12cfd0-087d-56c4-ae4c-c6004f6adbf4'
    }
  },

  subApps: {
    borrow: true,
    admin: true,
    procure: true,
    manage: [
      {
        name: 'Ausleihe Toni-Areal',
        href: '/manage/7df25853-2590-452d-a35f-0a3a9c73e36b/daily'
      },
      {
        name: 'ITZ-Software',
        href: '/manage/b3030cf8-c920-4eee-8f01-90855b291e0e/daily'
      }
    ],
    styleguide: false
  },
  appColor: LEIHS_GREEN,
  appTitle: 'LeihsApp',
  appMenu: [
    {
      title: 'AAA',
      href: '/aaa',
      icon: 'Settings',
      active: false,
      attr: { 'data-foo': 'bar' }
    },
    {
      title: 'BBB',
      href: '/bbb',
      icon: 'Categories',
      active: true
    },
    {
      title: 'CCC',
      href: '/ccc',
      icon: 'Users',
      active: false
    },
    {
      title: 'Kontakt',
      href: 'http://example.com',
      icon: 'Contact',
      active: false
    }
  ]
}

export default {
  title: 'Components/Navbar'
}

export const all_config_options = () => {
  return (
    <LeihsPage>
      <Navbar config={exampleParams} />
      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Great App</h1>
        <p className="lead">This is a great app with an even greater navbar.</p>
        <p className="lead">
          See <a href="./colors">all the colors</a> and <a href="./variants">more variants</a>
          ..
        </p>
        <small>those (example) params are rendered:</small>
        <pre className="text-bold text-left p-3 mx-5 my-3 card bg-warning">{JSON.stringify(exampleParams, 0, 2)}</pre>
      </div>{' '}
    </LeihsPage>
  )
}

export const config_variants = () => {
  const variants = [
    { name: 'base', props: { config: {} } },
    { name: 'no menu', props: { config: { appMenu: null } } },
    {
      name: 'on root page when logged out',
      props: {
        config: {
          me: false,
          appTitle: 'Leihs',
          appMenu: null,
          subApps: false,
          appColor: null
        }
      }
    }
  ]
  return (
    <LeihsPage>
      <div className="pt-1">
        {variants.map(({ name, props }, i) => {
          const navbarProps = {
            ...props,
            config: { ...exampleParams, ...props.config }
          }

          return (
            <div className="card p-3 m-3" key={i}>
              <p>{name}</p>
              <Navbar {...navbarProps} />
            </div>
          )
        })}
      </div>
    </LeihsPage>
  )
}

export const colors = () => {
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

  const examples = [...CLRS].map(color => ({
    ...exampleParams,
    appColor: color
  }))

  return (
    <LeihsPage>
      <header className="text-center p-3">
        <h3>
          <mark>
            <b>FIXME:</b> this is broken :(
          </mark>
        </h3>
        <p>
          same example data as {'"All Config Options"'}, but with using each color from{' '}
          <a href="http://clrs.cc">COLORS</a> as a <code>tint</code>. <code>base</code> color is the purple from{' '}
          <a href="https://getbootstrap.com">bootstrap {"doc's"} purple</a>.<br />
          <b>NOTE:</b> the <code>tint</code> is applied while keeping{' '}
          <a href="https://www.w3.org/TR/WCAG20/#relativeluminancedef">luminosity/relative luminance</a> and saturation
          from <code>base</code> color.
        </p>
      </header>

      {examples.map(config => (
        <>
          <div style={{ ...swatchStyle, background: `${navbarBaseColor}` }}>base</div>
          <div style={{ ...swatchStyle, background: `${config.appColor}` }}>tint</div>
          <Navbar config={config} />
          <hr />
        </>
      ))}
    </LeihsPage>
  )
}
colors.story = { name: '[broken] Colors' }
