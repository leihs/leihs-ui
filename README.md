# leihs-ui

**_[WORK IN PROGRESS]_**

shared styles, ui components etc.

## contents:

- `bootstrap-theme-leihs`
- `styleguide` / example usage and standalone ui/ux dev (next.js based)

- `./src` - shared code sources
  - `./components` react components
  - `./lib/server-side.js` standalone bundle for server-side react rendering

## development

```sh
./bin/build || ./bin/build-core
npm run storybook
```

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
