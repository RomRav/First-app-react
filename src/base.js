import firebase from 'firebase';
import Rebase from 're-base';


//Script firebase de connection à la base de données

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDiSjbbPtQoxnOLpEwVjZVJe7oTq_xVkl0",
    authDomain: "webfruit-827da.firebaseapp.com",
    databaseURL: "https://webfruit-827da.firebaseio.com",
    projectId: "webfruit-827da",
    storageBucket: "webfruit-827da.appspot.com",
    messagingSenderId: "502718628032"
};


const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());


export default base;