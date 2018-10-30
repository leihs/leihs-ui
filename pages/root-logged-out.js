import React from 'react'
import LeihsPage from '../src/components/styleguide/LeihsPage'

/* eslint-disable react/display-name */
export default () => (
  <LeihsPage>
    <div className="bg-paper">
      <div className="flash sticky-top">
        <div
          className="alert alert-info alert-dismissible fade show mb-0 rounded-0 border-info bg-info text-light text-center"
          role="alert"
        >
          <strong>Sie sind nun ausgeloggt.</strong>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href=".">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href=".">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=".">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="."
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href=".">
                  Action
                </a>
                <a className="dropdown-item" href=".">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href=".">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href=".">
                Disabled
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="."
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href=".">
                  Action
                </a>
                <a className="dropdown-item" href=".">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href=".">
                  Something else here
                </a>
              </div>
            </li>
          </ul>

          {/* <!-- <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> --> */}
        </div>
      </nav>

      <div className="container">
        <div className="card mt-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-8">
                <h1 className="h2">
                  Geräte-Ausleihe und Inventarverwaltungssystem
                </h1>
                <p className="lead">
                  Inventar verwalten, Gegenstände reservieren und abholen
                </p>
              </div>
              <div className="col-sm text-right">
                <button type="button" className="btn btn-success">
                  Login
                </button>
              </div>
            </div>

            <img
              className="ui-splashscreen-image"
              alt=""
              src="https://ausleihe.zhdk.ch/assets/leihs-62b57b03ec5abd5e5fa3e6c35fde8a782419982d2cdd771fa8fba6cd0ab63d41.png"
              style={{
                height: '397px',
                position: 'relative',
                float: 'right',
                width: '814px'
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
                leihs <small className="text-muted">4.19.3</small>
              </h5>
            </div>
            <div className="col-6 col-md" />
            <div className="col-6 col-md" />
          </div>
        </footer>
      </div>
    </div>
  </LeihsPage>
)

/* With CSS Modules */
/*
import css from "../style.css"

export default () => <div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
*/
