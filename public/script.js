import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { getAuth, connectAuthEmulator, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlh1G1Pxj6rAw7kPsVXHYskOXnpX0DH4o",
  authDomain: "crystalview-39df5.firebaseapp.com",
  projectId: "crystalview-39df5",
  storageBucket: "crystalview-39df5.appspot.com",
  messagingSenderId: "292807284580",
  appId: "1:292807284580:web:fc6fd9628fe89adb098c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

/*
const button = document.querySelector(".yeah");
button.addEventListener("click", (e) => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});*/

const thing = document.querySelector(".pls");
thing.addEventListener("click", (e) => {
  window.location.href = 'userDash.html';
  console.log("yes this is running");
});

/*
auth.onAuthStateChanged(user => {
  if(user) {
    window.location.href = 'userDash.html';
  }
});
*/
