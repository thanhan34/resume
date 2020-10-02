import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyC4oq1CRfXgzkTj54i-tJJc1BmAujs0ISE",
        authDomain: "portfolio-1a7ec.firebaseapp.com",
        databaseURL: "https://portfolio-1a7ec.firebaseio.com",
        projectId: "portfolio-1a7ec",
        storageBucket: "portfolio-1a7ec.appspot.com",
        messagingSenderId: "692511083202",
        appId: "1:692511083202:web:4221fc54022c170c0e895b",
        measurementId: "G-YPMSJLJ198"
    }
)
const db = firebaseApp.firestore();
export default db;