import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// const config = {
//   apiKey: "AIzaSyAtUb_ygMRIdHjzxarCx23Yj_RmX5GtI-M",
//   authDomain: "expensify-app-9fbcf.firebaseapp.com",
//   databaseURL: "https://expensify-app-9fbcf-default-rtdb.firebaseio.com",
//   projectId: "expensify-app-9fbcf",
//   storageBucket: "expensify-app-9fbcf.appspot.com",
//   messagingSenderId: "306186653631",
//   appId: "1:306186653631:web:1c737abd6ca4043c031b0a",
//   measurementId: "G-M2YSV6XV1R"
// };

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.FIREBASE_APP_ID,
  measurementId:process.env.FIREBASE_MEASUREMENT_ID
};



  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };
  

  // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  // export {firebase,googleAuthProvider, database as default};

//array

// database.ref('expences')
// .once('value')
// .then((snapshot) => {
//   const expences = [];

//   snapshot.forEach((childSnapshot) => {
//     expences.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expences)
// })

// database.ref('expences').on('value', (snapshot) => {
//     const expences = [];

//   snapshot.forEach((childSnapshot) => {
//     expences.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expences)
// })

// database.ref('expences').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expences').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expences').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })



// database.ref('expences').push({
//   description : 'array creation',
//   note : 'note the values',
//   amout: 0,
//   createdAt: 6-13-2021
// })









// object

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })



//  database.ref().on('value', (snapshot) => {
//    const val = snapshot.val() 
//   console.log(`${val.name} is ${val.job.title} at ${val.job.company} `)
// })

// setTimeout(() => {
// database.ref('age').set(29)
// }, 3500)

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })




  // database.ref()
  // .once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val()
  //   console.log(val)
  // })
  // .catch((e) => {
  //   console.log('error fetching data', e)
  // })

// database.ref().set({
//     name: 'sreekanth',
//     age: 26,
//     stressLevel : 6,
//     job : {
//       title: 'software dev',
//       company : 'google'
//     },
//     isSingle: true,
//     location:{
//       city : 'nandyal',
//       country : 'india'
//     }
// }).then(() => {
//   console.log('data is saved')
// }).catch((e) => {
//   console.log('this is failed', e)
// })

// database.ref('age').set(27)

// database.ref('attributes').set({
//   height : '174cm',
//   weight: 70
// })
// .then(() => {
//   console.log('data to be loaded')
// }).catch((e) => {
//   console.log('its failed', e)
// })


//database.ref('isSingle').set(null)


// database.ref()
// .remove()
// .then(() => {
//   console.log('data was removed')
// }).catch((e) => {
//   console.log('data did not removed', e)
// })

// database.ref().update({
//   stressLevel : 9,
//   'job/company' : 'amazon',
//   'location/city' : 'hyderabad',
//   isSingle : null
// })

