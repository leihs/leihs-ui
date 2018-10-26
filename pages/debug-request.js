import React from "react";

export default context => {
  return (
    <div className="container p-4">
      <h1>debug request</h1>
      <mark>
        <small>
          this page is shown either shown because a non-<code>GET</code>-request
          was sent from the browser or it navigated to{" "}
          <code>
            <a href="/debug-request">/debug-request</a>
          </code>
        </small>
      </mark>
      <pre>{JSON.stringify({ context }, 0, 2)}</pre>
    </div>
  );
};
