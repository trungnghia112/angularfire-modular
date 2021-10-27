const packageJson = require('../../package.json');

export const environment = {
  production: true,
  envName: 'PROD',
  i18nPrefix: '',
  appName: 'Angular Cli Seed',
  appShortName: 'angular',
  appPrefix: 'ACS',
  domain: {
    app: 'https://pwa-app-6924d.web.app'
  },
  API: 'https://us-central1-pwa-app-6924d.cloudfunctions.net',
  proxy: 'https://square-sound-ef49.mathroya.workers.dev/corsproxy/?apiurl=',
  versions: {
    app: packageJson.version
  },
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
