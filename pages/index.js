import React from 'react'
import Link from 'next/link'
import { LeihsPage } from '../src/components/styleguide'

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