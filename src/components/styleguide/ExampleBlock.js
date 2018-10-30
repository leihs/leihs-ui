import React from "react";
import "../../bootstrap-theme-leihs/bootstrap-leihs.scss";
import "../../style.scss";

const ExampleBlock = ({ children, title = "example" }) => (
  <div className="bg-white mb-4">
    <p className="mb-0 px-3 py-1 bg-light border border-bottom-0">
      <samp>‣ {title}</samp>
    </p>
    <div className="bg-checkerboard border p-3">
      <div className="bg-white border shadow">{children}</div>
    </div>
  </div>
);

export default ExampleBlock;
