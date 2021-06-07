import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAat-MaeCQO1F9q4HyQBzh3wD_39ivUcFs",
    authDomain: "whatsapp-mern-3ccaa.firebaseapp.com",
    projectId: "whatsapp-mern-3ccaa",
    storageBucket: "whatsapp-mern-3ccaa.appspot.com",
    messagingSenderId: "658954698180",
    appId: "1:658954698180:web:4ec748fe4aad30abe83891"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db