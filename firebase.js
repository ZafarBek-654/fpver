import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXNeZvlFpvIhnR-syPdzCcEqG8jcuJIQY",
  authDomain: "fpver3.firebaseapp.com",
  projectId: "fpver3",
  storageBucket: "fpver3.firebasestorage.app",
  messagingSenderId: "499817239004",
  appId: "1:499817239004:web:d4e61745caea17e42eff19",
  measurementId: "G-5LSJ8WPKRC"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics only works in some browsers/contexts, so don't let it break the app
isSupported().then(ok => { if (ok) getAnalytics(app); }).catch(() => {});