import React from 'react'
import Link from 'next/link'
import { LeihsPage } from '../../src/components/styleguide'

export const NavLinks = () => (
  <ul>
    <li>
      <Link prefetch href="./password-reset/forgot-password">
        <a>forgot-password</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="./password-reset/forgot-password?user=some-user">
        <a>forgot-password, user was prefilled from param</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="./password-reset/forgot-password-invalid-user">
        <a>forgot-password, invalid user was entered</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="./password-reset/forgot-password-success">
        <a>forgot-password, sucess message ("Check your mail!")</a>
      </Link>
    </li>

    <li>
      <Link prefetch href="./password-reset/forgot-password-expired-token">
        <a>
          forgot-password, token was expired and we got redirected here from{' '}
          <code>/my/reset-password</code>
        </a>
      </Link>
    </li>

    <li>
      <Link prefetch href="./password-reset/reset-password">
        <a>reset-password</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="./password-reset/reset-password-from-email">
        <a>reset-password, prefilled from email</a>
      </Link>
    </li>
    <li>
      <Link prefetch href="./password-reset/reset-password-success">
        <a>reset-password, sucess message ("Sign in Again!")</a>
      </Link>
    </li>
  </ul>
)

export default function IndexPage() {
  return (
    <LeihsPage>
      <div className="container p-4">
        <h1>password reset flow</h1>
        <NavLinks />
      </div>
    </LeihsPage>
  )
}
