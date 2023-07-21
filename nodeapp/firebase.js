import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy14LNRtkvFS4kZPZCykor6J9iGIU63tA",
  authDomain: "react-notes-56e7d.firebaseapp.com",
  projectId: "react-notes-56e7d",
  storageBucket: "react-notes-56e7d.appspot.com",
  messagingSenderId: "236023917304",
  appId: "1:236023917304:web:e3fd27e996e2875014a90d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
