import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
 
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAajGFoAyccl06ivSGUxHioC8njQAGI0lo",
  authDomain: "crwn-clothing-db-56708.firebaseapp.com",
  projectId: "crwn-clothing-db-56708",
  storageBucket: "crwn-clothing-db-56708.appspot.com",
  messagingSenderId: "122405742024",
  appId: "1:122405742024:web:b6d3cb22906c7400148cfd"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { 
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating tghe user', error.message);
    }
  }
  
  return userDocRef;


}