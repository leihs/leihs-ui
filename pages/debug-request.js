import React from 'react'
import f from 'lodash'

export default context => {
  return (
    <div className="container p-1">
      <div className="bg-white card p-4">
        <h1>debug request</h1>
        <mark>
          <small>
            this page is shown either shown because a non-
            <code>GET</code>
            -request was sent from the browser or it navigated to the URL{' '}
            <code>
              <a href="/debug-request">/debug-request</a>
            </code>
            .
          </small>
        </mark>
        <hr />
        <h3 className="h5">HTTP request as received on the server:</h3>
        <pre>
          <b>
            {JSON.stringify(
              f.get(context, ['url', 'query', 'requestAsSeenOnServer']),
              0,
              2
            ) || 'error'}
          </b>
        </pre>
      </div>
    </div>
  )
}
