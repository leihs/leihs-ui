// next.js custom server. based on default, but handles POST for testing/ debugging

// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const method = req.method.toUpperCase();

    if (["GET", "HEAD"].includes(method)) {
      // let next.js handle it normally
      handle(req, res);
    } else {
      let requestBody = [];
      req.on("data", chunk => requestBody.push(chunk)).on("end", () => {
        requestBody = Buffer.concat(requestBody).toString();

        app.render(
          req,
          res,
          "/debug-request",
          Object.assign({}, query, {
            isDebugRequestPage: true,
            requestAsSeenOnServer: {
              method: req.method,
              url: req.url,
              httpVersion: req.httpVersion,
              headers: req.headers,
              body: requestBody
            }
          })
        );
      });
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
