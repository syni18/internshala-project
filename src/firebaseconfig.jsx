// import firebase from './firebase'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDVNoV1MkQllHisnoMCIAddM7Hvozm_pHI",
  authDomain: "internshala-project-b7454.firebaseapp.com",
  projectId: "internshala-project-b7454",
  storageBucket: "internshala-project-b7454.appspot.com",
  messagingSenderId: "542399112034",
  appId: "1:542399112034:web:14aea6166a26dbb89c823b",
  measurementId: "G-8Q498T4H87",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;