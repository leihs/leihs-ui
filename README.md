# leihs-ui

shared UI components, theme (bootstrap-based) and storybook/styleguide.

web views of storybook:

- <https://next.ui.leihs.app> - latest dev version (from `next`) branch
- <https://ui.leihs.app> - latest version used in leihs (from `master`) branch

## docs

- 🟪 [Bootstrap (CSS Framework](https://getbootstrap.com/docs/4.6/components/)
- ⚛ [React (UI Framework)](https://reactjs.org/docs/react-component.html)
- 📗 [Storybook (Styleguide)](https://storybook.js.org/docs/react/get-started/introduction)

## development

setup

- use [Node.js](https://nodejs.org/) 14 LTS
- clone and run

  ```sh
  git clone https://github.com/leihs/leihs-ui
  cd leihs-ui
  bin/build
  npm run storybook
  ```

daily work

```sh
# make a build first to ensure all the dependencies are in order
./bin/build || ./bin/build-core

# work on UI Components in isolation (storybook/styleguide):
npm run storybook

# work on an app that depends on `leihs-ui`:
npm run watch:lib

# if also working on the bootstrap theme:
npm run watch:theme

# to do before merging (see also "merging" below)
bin/update-snapshots
```

## content

- `bootstrap-theme-leihs`
- `styleguide` / example usage and standalone ui/ux dev (next.js based)

- `./src` - shared code sources
  - `./components` react components
    - `./components/Mobile` react components for new [`borrow`](https://github.com/leihs/leihs-borrow)
  - `./stories` UI stories for specific features
  - `./src/**/*.stories.js` UI stories per component (e.g. `MyComp.js` alongside `MyComp.stories.js`)
  - `./lib/server-side.js` standalone bundle for server-side react rendering
  - `./lib/client-side.js` standalone bundle for client-side usage (in non-react apps)
  - `./lib/components-bundle.js` bundle for inclusion in other react apps

### `leihs-calendar`

The `Calendar` component is forked and customized from an existing project. It is developed in a separate repo, releases are published to the `npm` registry and used in `leihs-ui` via `package.json` as `@leihs/calendar`.

- repo: <https://github.com/leihs/leihs-calendar>
- forked from: <https://github.com/hypeserver/react-date-range>
- npm package: <https://www.npmjs.com/package/@leihs/calendar>

### merging / delivery

This repository is shared between several leihs repositories that always include the latest `master` branch.
Therefore, pushing to the `next` branch instead of `master` should be done for small chores like build config or dependency upgrades that dont need to be immediately used everywhere else in leihs (which would create a lot of noise in those repositories).

- for pushing to the `master` and `next` branches, the "All Test OK" job must pass
- for pushing to the `master` branch, the "⚑ Good To Merge" job must _also_ pass
  - this includes a check that all commits from `master` and `next` are included
- put another way:
  - whatever is on `next` has to be included in the next push to `master` in `leihs-ui`
  - whatever is on `master` has to be included in the next push to `master` in _any repository that uses_ `leihs-ui`!

## tests

To run the tests locally, additonal dependencies must be installed.
The changes made to `package{-lock}.json` MUST not be checked in (this is a compromise because in most apps we dont need to run tests).

```bash
npm add -D ./test
```
