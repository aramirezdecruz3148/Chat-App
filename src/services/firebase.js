const config = {
    apiKey: 'AIzaSyBbBfsW1s_3MFVf0PxgyebsDLfOp5aH6zg',
    authDomain: 'bootcamp2-bac7d.firebaseapp.com',
    databaseURL: 'https://bootcamp2-bac7d.firebaseio.com',
    projectId: 'bootcamp2-bac7d',
    storageBucket: 'bootcamp2-bac7d.appspot.com',
    messagingSenderId: '856095394433',
    appId: '1:856095394433:web:a0a43c492022b440'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();