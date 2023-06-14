# leihs-ui

shared UI components (React), theme (based on Bootstrap) and styleguide (Storybook).

## development

setup

- use [Node.js](https://nodejs.org/); version see `.tool-versions` (recommended: install with `asdf` version manager) 
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
  - `bootstrap-leihs.css`
    - regular theme (used in `admin`, `my`, and `procure`)
    - based on Bootstrap v4 with slight customisations
- `borrow-theme`
  - `borrow-theme.css`
    - theme variant for `borrow`
    - based on Bootstrap v5, heavily customized

---

- `./src` - shared code sources
  - `./components` react components
    - `./components/Borrow` react components for [`Borrow`](https://github.com/leihs/leihs-borrow)
  - `./stories` UI stories for specific features
  - `./src/**/*.stories.js` UI stories per component (e.g. `MyComp.js` alongside `MyComp.stories.js`)
  - `./lib/server-side.js` standalone bundle for server-side react rendering
  - `./lib/client-side.js` standalone bundle for client-side usage (in non-react apps)
  - `./lib/components-bundle.js` bundle for inclusion in other react apps

### `leihs-calendar`

The `Calendar` component is forked and customized from an existing project. It is developed in a separate repo, `leihs-ui` references it via `package.json` as a github dependency `"@leihs/calendar": "github:leihs/leihs-calendar#3.1.0"`.

- repo: <https://github.com/leihs/leihs-calendar>
- forked from: <https://github.com/hypeserver/react-date-range>

Note that the npm package: <https://www.npmjs.com/package/@leihs/calendar> is not maintained anymore.

### merging / delivery

(Outdated! The `next` branch is not used anymore and will be removed)

This repository is shared between several leihs repositories that always include the latest `master` branch.
Therefore, pushing to the `next` branch instead of `master` should be done for small chores like build config or dependency upgrades that dont need to be immediately used everywhere else in leihs (which would create a lot of noise in those repositories).

- for pushing to the `master` and `next` branches, the "All Test OK" job must pass
- for pushing to the `master` branch, the "⚑ Good To Merge" job must _also_ pass
  - this includes a check that all commits from `master` and `next` are included
- put another way:
  - whatever is on `next` has to be included in the next push to `master` in `leihs-ui`
  - whatever is on `master` has to be included in the next push to `master` in _any repository that uses_ `leihs-ui`!

## Snapshot testing

`npm run test`: render snapshots of all stories (using `@storybook/addon-storyshots`). "Prototypes" stories are excluded from snapshots.

## Icons

This repository also includes custom icons contained in `./static/borrow-app-icons`.

Icons designed by Joël Gähwiler <https://github.com/256dpi>

"Sliders Icon.svg" designed by Max Albrecht <https://github.com/eins78> based on <https://icons.getbootstrap.com/icons/sliders/>

"Template.svg" designed by Urs van Binsbergen <https://github.com/urs-van-binsbergen/>.
