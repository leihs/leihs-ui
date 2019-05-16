import React from 'react'
import Link from 'next/link'
import { LeihsPage } from '../src/components/styleguide'

import { NavLinks as PwResetNavLinks } from './password-reset'

export default function IndexPage() {
  return (
    <LeihsPage>
      <div className="container p-4">
        <h1>
          <a href="https://github.com/leihs/leihs-ui">Leihs UI</a> examples
        </h1>
        <ul>
          <li>
            <Link prefetch href="./root-logged-out">
              <a>root/logged out</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="./auth">
              <a>auth stuff</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="./login">
              <a>
                dummy page <code>/login</code>
              </a>
            </Link>
            <ul>
              <li>
                <Link prefetch href="./login/no-user">
                  <a>no user</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="./login/invalid-user">
                  <a>invalid user</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="./login/wrong-password">
                  <a>wrong password</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="./login/step-2-pw">
                  <a>second step, password auth only</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="./login/step-2-full">
                  <a>second step, password and external auth</a>
                </Link>
              </li>
              <li>
                <Link prefetch href="./login/step-2-onlyext">
                  <a>second step, 2 external auth options and no password</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link prefetch href="./password-reset">
              <a>password reset flow</a>
            </Link>
            <PwResetNavLinks />
          </li>
          <li>
            <Link prefetch href="./login-dummy">
              <a>dummy login flow</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="./navbar/dummy">
              <a>dummy navbar page</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/static/vanilla-login.html">
              <a>vanilla login</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/debug-request">
              <a>debug request</a>
            </Link>
          </li>
        </ul>
      </div>
    </LeihsPage>
  )
}
