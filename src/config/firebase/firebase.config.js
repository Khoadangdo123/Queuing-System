import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBZ1_uruMF4MuSSxrd4J9loBRzfF3Mu4U",
  authDomain: "queuing-system-a799e.firebaseapp.com",
  databaseURL: "https://queuing-system-a799e-default-rtdb.firebaseio.com",
  projectId: "queuing-system-a799e",
  storageBucket: "queuing-system-a799e.appspot.com",
  messagingSenderId: "882159614217",
  appId: "1:882159614217:web:9247d08fd04627d835fbd8",
  measurementId: "G-12CXQYZ6D8"
};

export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { firebaseConfig, db };