import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc, writeBatch,collection, query,getDocs} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCxBZ9dmUwHUJa2ii_ed_js-O6WrkFpnfw",
    authDomain: "meek-ecommerce.firebaseapp.com",
    projectId: "meek-ecommerce",
    storageBucket: "meek-ecommerce.appspot.com",
    messagingSenderId: "706973125706",
    appId: "1:706973125706:web:695c47c778d0ebcfd02ab3"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)
  //storage of data and creating user document from auth
  export const db = getFirestore();
  
  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach((object) =>{
      const docRef= doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
    })
      await batch.commit()
      console.log('done')
  }

  export const getCategoriesAndDocuments =async() =>{
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)
    const querySnapShot = await getDocs(q)
    const categoryMap= querySnapShot.docs.reduce((acc, docSnapShot) =>{
      const {title, items} = docSnapShot.data()
      acc[title.toLowerCase()] = items 
      return acc
    }, {})
    return categoryMap
  }

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid) //userAuth is the console.log of google sign in after we have signed in
    console.log(userDocRef)

    //getting and checking data related to a document
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    //to know if our doc exist
    console.log(userSnapshot.exists())  // false at first
    if(!userSnapshot.exists()){ //true when you login using google auth
    const {displayName, email} =userAuth // the display name and email is from the userAuth we destructured
    const createdAt = new Date(); // we will know when the user are signing in
    
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch(error) {
        console.log('error creating the user', error.message)

    }
  }
  return userDocRef;

  
}

export const createAuthUserWithEmaiAndPassword = async ( email, password) =>{
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => signOut(auth)

export const onAuthStateChangedListener = (callback) =>{
  onAuthStateChanged(auth, callback)

}