<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAaKUHNLuhs50-imnmAaRGrbpLtcBMmNKc",
    authDomain: "spotify-clone-253f1.firebaseapp.com",
    projectId: "spotify-clone-253f1",
    storageBucket: "spotify-clone-253f1.appspot.com", // Fixed this line
    messagingSenderId: "759062633205",
    appId: "1:759062633205:web:30c96e3bfe27d8940d83bc",
    measurementId: "G-8SGN8SCRP8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
