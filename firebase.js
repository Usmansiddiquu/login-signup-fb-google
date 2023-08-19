import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAgMYmWgfHDy-V6DKig5C3i5EZxyEB5nMY",
    authDomain: "hackathon-49e2c.firebaseapp.com",
    projectId: "hackathon-49e2c",
    storageBucket: "hackathon-49e2c.appspot.com",
    messagingSenderId: "361282621914",
    appId: "1:361282621914:web:d8bf29d4cbcf8fd8ae30e3",
    measurementId: "G-7LKKGDJ6VQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

var button = document.getElementById("btn")
button.addEventListener("click", () =>{

    var email = document.getElementById("email")
    let gmail = email.value
    var pass = document.getElementById("password")
    let Password = pass.value

    createUserWithEmailAndPassword(auth, gmail, Password)
    .then((res) => {
        const user = res.user;
        console.log("user", user)
    })
    .catch((error) => {
        //   const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage)
        
    });
})
