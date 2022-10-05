# Parcel Force

A simple React app to demonstrate the viability of using [Parcel](https://parceljs.org/recipes/react/) rather than [Create React App](https://create-react-app.dev/) for React development. This allows us to start from scratch rather than tinker with pre-existing files.

To start in dev:

```
npm install
npx parcel index.html
```

Navigate to `localhost:1234`

To run the linter: `npx eslint src/**`

To build the project for production:

```
npx parcel build index.html
```

A note on assets - assets can be placed either in the root directory with `index.html` or in a dedicated directory.
This project puts them into a `static` directory which is then referenced in `index.html`.  This does not impact the build
as Parcel can build these assets from anywhere so long as they are referenced correctly

To deploy to Firebase run `firebase init` with the following options:

1. Select hosting
2. Set `dist` as the public directory

Then run `firebase deploy`