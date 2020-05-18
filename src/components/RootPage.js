import React from 'react'
// import cx from 'classnames'
import f from 'lodash'

import Navbar from './Navbar'
import FlashMessages from './FlashMessages'

const RootPage = props => {
  const { flash, navbar, splash, footer } = props
  return (
    <React.Fragment>
      <div className="bg-paper h-100">
        <FlashMessages {...flash} />

        <Navbar {...navbar} />

        <div className="container">
          <div className="card mt-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="h2">{splash.title}</h1>
                  <p className="lead">{splash.text}</p>
                </div>
                <div className="col-md text-right">
                  {/* <button type="button" className="btn btn-success">
                    Login
                  </button> */}
                </div>
              </div>

              {/* <div
                className="bg-leihs-splash"
                style={{
                  position: 'relative',
                  float: 'right',
                  maxWidth: '814px',
                  width: '100%',
                  height: 'auto'
                }}
              /> */}

              {!f.isEmpty(f.get(splash, 'image')) && (
                <img
                  alt=""
                  src={splash.image}
                  style={{
                    position: 'relative',
                    float: 'right',
                    maxWidth: '814px',
                    width: '100%',
                    height: 'auto'
                  }}
                />
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
              <div className="col-6 col-md">
                <h5>
                  {footer.appName}{' '}
                  <OptionalLink href={footer.appVersionLink}>
                    <small className="text-muted">{footer.appVersion}</small>
                  </OptionalLink>
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

export default RootPage

const OptionalLink = ({ href, children }) => (!f.isEmpty(href) ? <a href={href}>{children}</a> : children)
