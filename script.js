let currentSlide = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// FIREBASE



// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-jCLxbadAKC3xPNdDFil4FR08GKme6MI",
  authDomain: "smithackathon2.firebaseapp.com",
  projectId: "smithackathon2",
  storageBucket: "smithackathon2.firebasestorage.app",
  messagingSenderId: "198250935031",
  appId: "1:198250935031:web:cb1c16e45817f6356ad9f2",
  measurementId: "G-2DW7F3GMXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(auth);

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut }

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Save to Firebase
    database.ref('contacts/').push({
        name: name,
        email: email,
        message: message
    }).then(() => {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }).catch((error) => {
        alert('Error sending message: ' + error.message);
    });
});
