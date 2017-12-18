import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyBMcQ3fYqHp9YHfXV0qGnvEG8fkXL6sWf0",
        authDomain: "todo-tutorial-9757b.firebaseapp.com",
        databaseURL: "https://todo-tutorial-9757b.firebaseio.com",
        projectId: "todo-tutorial-9757b",
        storageBucket: "todo-tutorial-9757b.appspot.com",
        messagingSenderId: "247315582282"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
