import React from 'react'
import cx from 'classnames'
import f from 'lodash'

import Navbar from '../src/components/Navbar'

import { exampleParams as exampleNavbarParams } from './navbar/dummy'

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
    text: 'Inventar verwalten, Gegenstände reservieren und abholen'
  },
  footer: {
    appName: 'leihs',
    appVersion: '4.19.3'
  }
}

const RootPage = props => {
  const { flashMessages, navbar, splash, footer } = props
  return (
    <React.Fragment>
      <div className="bg-paper h-100">
        {!f.isEmpty(flashMessages) && (
          <div className="flash sticky-top">
            {f.map(flashMessages, ({ message, level = 'info' }, i) => (
              <div
                key={i}
                className={cx(
                  `alert-${level} bg-${level}`,
                  'alert alert-dismissible fade show mb-0 rounded-0 border-info text-light text-center'
                )}
                role="alert"
              >
                <strong>{message}</strong>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ))}
          </div>
        )}

        <Navbar {...navbar} />

        <div className="container">
          <div className="card mt-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-8">
                  <h1 className="h2">{splash.title}</h1>
                  <p className="lead">{splash.text}</p>
                </div>
                <div className="col-sm text-right">
                  <button type="button" className="btn btn-success">
                    Login
                  </button>
                </div>
              </div>

              <div
                className="bg-leihs-splash"
                style={{
                  position: 'relative',
                  float: 'right',
                  maxWidth: '814px',
                  width: '100%',
                  height: 'auto'
                }}
              />

              <img
                alt=""
                src={splashImage}
                style={{
                  position: 'relative',
                  float: 'right',
                  maxWidth: '814px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
              <div className="col-6 col-md">
                <h5>
                  {footer.appName}{' '}
                  <small className="text-muted">{footer.appVersion}</small>
                </h5>
              </div>
              <div className="col-6 col-md" />
              <div className="col-6 col-md" />
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  )
}

const page = () => <RootPage {...exampleProps} />
export default page
