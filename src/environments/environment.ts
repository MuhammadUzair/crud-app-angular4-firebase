// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const environment = {
//   production: false
// };

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyCNC7rQDo3xqBypQoGQcHagm6m6U9jzvwo",
    authDomain: "businesscontacts-eb3dc.firebaseapp.com",
    databaseURL: "https://businesscontacts-eb3dc.firebaseio.com",
    projectId: "businesscontacts-eb3dc",
    storageBucket: "businesscontacts-eb3dc.appspot.com",
    // messagingSenderId: "623001757792"
  }
};