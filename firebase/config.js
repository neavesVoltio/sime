      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
      import { getAuth, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyCASQ8Jnq_7McRr578Kfm_fv4UJ89TfaIU",
          authDomain: "encuestasime-905ef.firebaseapp.com",
          projectId: "encuestasime-905ef",
          storageBucket: "encuestasime-905ef.appspot.com",
          messagingSenderId: "756094540250",
          appId: "1:756094540250:web:9885d8ba757173798048e3"
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        
