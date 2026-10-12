<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAXNeZvlFpvIhnR-syPdzCcEqG8jcuJIQY",
    authDomain: "fpver3.firebaseapp.com",
    projectId: "fpver3",
    storageBucket: "fpver3.firebasestorage.app",
    messagingSenderId: "499817239004",
    appId: "1:499817239004:web:d4e61745caea17e42eff19",
    measurementId: "G-5LSJ8WPKRC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>