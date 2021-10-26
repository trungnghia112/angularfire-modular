// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: false,
  firebase: {
    apiKey: 'AIzaSyD6h91AYrTsn-a4eMFSVbbnQk38jdpDVAo',
    authDomain: 'pwa-app-6924d.firebaseapp.com',
    databaseURL: 'https://pwa-app-6924d.firebaseio.com',
    projectId: 'pwa-app-6924d',
    storageBucket: 'pwa-app-6924d.appspot.com',
    messagingSenderId: '911866464392',
    appId: '1:911866464392:web:c581cdd0849a223a'
  },
  vapidKey: '',
  recaptcha3SiteKey: '',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
