# @n-kit/repo-template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Features

- Use [TSDX](https://github.com/formium/tsdx) to develop, build, test.
- Use ESLint to lint.
- Use [commitizen](https://github.com/commitizen/cz-cli), [commitlint](https://github.com/conventional-changelog/commitlint) to limit input commit messages.
- Use [@changesets/cli](https://github.com/atlassian/changesets) to generate changelog, version.
- Use husky, lint-staged to automatic trigger lint, set semver version and more.
- Base on yarn@berry to manage dependencies.

## Get started

0. Click `Use this template`, and clone your repo.
1. Search `@n-kit/repo-template`, `n-kit/repo-template`, then replace all with your module name.

then it'll be your repository totally.

## Usage

-

## Presets

- .yarnrc.yml: `npmRegistryServer: "https://registry.npm.taobao.org/"`
- commitlint.config.js: `extends: ['@commitlint/config-conventional']`
- .gitignore:

  ```
  /package-lock.json
  **/yarn.lock
  ```

- peerDependencies:

  ```json
  "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0"
  },
  ```

- tsconfig.json: `"module": "esnext"`

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/n-kit/repo-template/graphs/contributors"><img src="https://contrib.rocks/image?repo=n-kit/repo-template" /></a>
