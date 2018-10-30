import React from 'react'
import Link from 'next/link'
import { ExampleBlock, LeihsPage } from '../../src/components/styleguide'

export default () => {
  return (
    <LeihsPage className="p-5 text-center">
      <h1>OK</h1>
      <p className="lead">
        This is the Page that I want to visit after logging in.
      </p>
      <p>
        <a href="/login-dummy">go back to start of dummy</a>
      </p>
    </LeihsPage>
  )
}
