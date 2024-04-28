import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCq2rEfM-V8woQSmqUqlslJQ6mVI2Y8o3Q",
  authDomain: "dashboard-app-9c5e5.firebaseapp.com",
  projectId: "dashboard-app-9c5e5",
  storageBucket: "dashboard-app-9c5e5.appspot.com",
  messagingSenderId: "229809004694",
  appId: "1:229809004694:web:ecb731414001b153c5a2b7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// export default auth;
export {auth}


