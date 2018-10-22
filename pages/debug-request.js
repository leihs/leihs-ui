import React from "react";

export default context => {
  return (
    <div className="container p-4">
      <h1>debug request</h1>
      <pre>{JSON.stringify({ context }, 0, 2)}</pre>
    </div>
  );
};
