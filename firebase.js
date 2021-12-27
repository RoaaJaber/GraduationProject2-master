
import firebase  from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCGGxANSb-8ehoIYhnCIsR5dlDdB0cJFTI',
  authDomain: 'katakeetcare.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'katakeetcare',
  storageBucket: 'katakeetcare.appspot.com',
  messagingSenderId: '524036728717',
  appId: '1:524036728717:web:8c4c87153f8a49b9fbbfc4',
  measurementId: 'G-Y8LN0KSNND'
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const store = db.collection('components').doc('state');
store.set({
    door: false,
    lights : false,
    daytime : true,
    fan : false ,
    temperature : 0 ,
    TimeEggDetc :'',
    TimeEggNotDetc : '',

  })
  .then(() => {
    console.log('door state added!');
  });



export default firebase;
