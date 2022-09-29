// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFlE409zYrRDvZJRMfvRlHFHFWX-iBVvE",
  authDomain: "react-sakura.firebaseapp.com",
  projectId: "react-sakura",
  storageBucket: "react-sakura.appspot.com",
  messagingSenderId: "162848202238",
  appId: "1:162848202238:web:707227754bdce01b7bf4af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems() {
  const miColec = collection(firestoreDB, "productos");
  const productosSnap = await getDocs(miColec);

  return productosSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getItemsByCategory(categoryid) {
  const miColec = collection(firestoreDB, "productos");
  const queryProductos = query(miColec, where("categoria", "==", categoryid));

  const productosSnap = await getDocs(queryProductos);

  return productosSnap.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getItem(id) {
  const miColec = collection(firestoreDB, "productos");
  const productosRef = doc(miColec, id);
  const productosSnap = await getDoc(productosRef);

  return {
    ...productosSnap.data(),
    id: productosSnap.id,
  };
}
