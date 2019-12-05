import firebase from 'firebase';

// const config = {
//     apiKey: process.env.apiKey,
//     authDomain: process.env.authDomain,
//     databaseURL: process.env.databaseURL,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId:  process.env.appId,
//     measurementId:  process.env.measurementId
// };

const config = {
    apiKey: "AIzaSyCdjUapn8wwgaYTOK77O5acKPDJRq7BQcA",
    authDomain: "ultimate-vigil-247005.firebaseapp.com",
    databaseURL: "https://ultimate-vigil-247005.firebaseio.com",
    projectId: "ultimate-vigil-247005",
    storageBucket: "ultimate-vigil-247005.appspot.com",
    messagingSenderId: "229215841762",
    appId: "1:229215841762:web:b027b02d3befdd6aaa9dbb",
    measurementId: "G-YZY389LFR8"
  }
firebase.initializeApp(config);

export default firebase;

