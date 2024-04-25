# Contributing to cuid

To properly perform browser testing, Chrome 60 or higher needs to be installed locally to run the tests in headless mode.

## Testing

To unit test the server version locally, run

```sh
npm run test:server
```

To unit test cuid in the browser version locally, run

```sh
npm run test:browser
```

## Releases

- PRs are merged in to `master`
- When ready to release, create a release branch from `master` and bump the version in `package.json` using `npm version [major|minor|patch]`
- Get the PR approved and merged to `master`
- Checkout `master` and pull the latest changes and publish to npm with `npm publish`