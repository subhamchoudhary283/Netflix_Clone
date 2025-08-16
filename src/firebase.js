// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXK9N1s6QhXQwd4A02NXCeePd1gILpsy0",
  authDomain: "netflix-clone-964da.firebaseapp.com",
  projectId: "netflix-clone-964da",
  storageBucket: "netflix-clone-964da.firebasestorage.app",
  messagingSenderId: "452613146538",
  appId: "1:452613146538:web:ec69c3e72d9e51ad918dd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const auth = getAuth(app);
const db = getFirestore(app);

// For SignUp
const signup=async(name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider: "local",
            email,
        })

    }catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].replaceAll('-',' '));
    }

}


// For user Login
const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].replaceAll('-',' '));
    }
}

// For Logout 
const logout=async()=>{
    signOut(auth);
}

export {auth, db , login ,signup ,logout}