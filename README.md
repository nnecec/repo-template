# @n-kit/repo-template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build status](https://badgen.net/github/checks/n-kit/repo-template)](https://github.com/n-kit/repo-template/actions/)
[![License](https://badgen.net/github/license/n-kit/repo-template)](https://github.com/n-kit/repo-template/blob/master/LICENSE)

## Features

- `Vite` to develop, build.
- `ESLint` to lint, `Vitest` to test.
- [commitizen](https://github.com/commitizen/cz-cli), [commitlint](https://github.com/conventional-changelog/commitlint) to limit commit messages.
- [@changesets/cli](https://github.com/atlassian/changesets) to generate changelog, manage versions, and publish.
- use Husky to automatic trigger git hooks.
- Use [Docusaurus](https://github.com/facebook/docusaurus) to write document, and web tests.
- Base on [yarn@berry](https://yarnpkg.com/getting-started) to manage dependencies.

if you need `monorepo`, here is single [monorepo-template](https://github.com/n-kit/monorepo-template)

## Get started

0. Click `Use this template`, and clone your repo.
1. Search `@n-kit/repo-template`, `n-kit/repo-template`, then replace all with your module name.

then it'll be your repository totally.

## Tips

0. Execute `npm run changeset` or `yarn changeset` to add a changeset, then execute `git commit`, this command will trigger `lint-staged` and `commitzen`.
1. If you create a PR merge to main, `changeset/actions` will create a `Version Packages` PR. confirm merge `Version Packages` PR will trigger `changeset publish`, it's really publish.

## Preset configs

- `.yarnrc.yml`: `npmRegistryServer: "https://registry.npm.taobao.org/"`
- `commitlint.config.js`: `extends: ['@commitlint/config-conventional']`
- `peerDependencies`:

  ```json
  "peerDependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  },
  ```

- `tsconfig.json`: `"module": "esnext"`
- `vite.config.ts`: `target: 'esnext'`

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/n-kit/repo-template/graphs/contributors"><img src="https://contrib.rocks/image?repo=n-kit/repo-template" /></a>
