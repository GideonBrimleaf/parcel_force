# Parcel Force

A simple React app to demonstrate the viability of using [Parcel](https://parceljs.org/recipes/react/) rather than [Create React App](https://create-react-app.dev/) for React development. This allows us to start from scratch rather than tinker with pre-existing files.

To start in dev:

```
npm install
npx parcel index.html
```

Navigate to `localhost:1234`

To run the linter: `npx eslint src/**`

To deploy to Firebase run `firebase init` with the following options:

1. Select hosting
2. Set `dist` as the public directory

Ensure that a full build has completed successfully with `npx parcel build index.html`.
Then run `firebase deploy`
