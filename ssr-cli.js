// Source of mini CLI that is called from server process by pipeing the
// bundled source to stdin and call it with positional arguments.
// For minimal version of how it used see ../test/test-ssr-call.sh
// This CLI is bundled into a single file with <http://npmjs.com/@vercel/ncc>.

const LeihsUI = require('./dist/leihs-ui-server-side')

function SSR() {
  process.stdout.write(
    LeihsUI.renderComponentToString(
      process.argv[3],
      JSON.parse(process.argv[4])
    )
  )
}

switch (process.argv[2]) {
  case 'render':
    return SSR()
  default:
    throw new Error('Invalid Subcommand!')
}
