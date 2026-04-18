import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getFirestore,
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
apiKey: "",
authDomain: "",
projectId: "",
storageBucket: "",
messagingSenderId: "",
appId: ""
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


document.getElementById("contactForm").addEventListener("submit", async(e)=>{

e.preventDefault();

await addDoc(collection(db,"messages"),{

name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value,
time: new Date()

});

alert("Message Sent Successfully");

document.getElementById("contactForm").reset();

});
