import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSBewziMvDlElKMlA3Puv4WEbB9FeOzVE",
    authDomain: "school-react-a12cd.firebaseapp.com",
    projectId: "school-react-a12cd",
    storageBucket: "school-react-a12cd.appspot.com",
    messagingSenderId: "675098339500",
    appId: "1:675098339500:web:b00c74fba95e5a0564d709"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;