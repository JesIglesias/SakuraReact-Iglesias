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
  setDoc,
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
export const firestoreDB = getFirestore(app);

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

export async function dataToFirebase() {
  const productos = [
    {
      id: 1,
      categoria: "vestidos",
      producto: "Vestido Narciso",
      precio: 5000,
      stock: 10,
      imagen: "https://i.postimg.cc/x1z80CGq/vestido1.jpg",
      descripcion:
        "Vestido manga larga 100% algodón, con bolsillos y cuello alto.",
    },
    {
      id: 2,
      categoria: "vestidos",
      producto: "Vestido Clavel",
      precio: 5500,
      stock: 25,
      imagen: "https://i.postimg.cc/vHRH0Mws/vestido2.jpg",
      descripcion:
        "Vestido confeccionado en denim 100% algodón, viene con bolsillos en la parte superior con parches bordados con flores blancas y una abeja.",
    },
    {
      id: 3,
      categoria: "pantalones",
      producto: "Pantalón Pensamiento",
      precio: 4000,
      stock: 20,
      imagen: "https://i.postimg.cc/TPL09rXQ/pantalon1.jpg",
      descripcion:
        "Pantalón slouchy (holgado en las piernas pero entallado en cintura y tobillos) confeccionado en kaddy y spandex, (97% poliester 3%spandex) con terminación semi aterciopelada.",
    },
    {
      id: 4,
      categoria: "pantalones",
      producto: "Pantalón Orquidea",
      precio: 4200,
      stock: 35,
      imagen: "https://i.postimg.cc/d1ddwsBv/pantalon2.jpg",
      descripcion:
        "Pantalón tiro alto confeccionado en kaddy(97% poliester 3% elastano),tiene 2 bolsillos delanteros y 2 traseros.",
    },
    {
      id: 5,
      categoria: "remeras",
      producto: "Remera Margarita",
      precio: 3000,
      stock: 30,
      imagen: "https://i.postimg.cc/Xvg2X99v/remera3.jpg",
      descripcion:
        "Remera de algodón bordado con margaritas; cuello media polera. Se cierra en la espalda con botones forrados de la misma tela.",
    },
    {
      id: 6,
      categoria: "remeras",
      producto: "Remera Laurel",
      precio: 3500,
      stock: 20,
      imagen: "https://i.postimg.cc/pd6px6yY/remera6.jpg",
      descripcion:
        "Remera confeccionada en kaddy (97% poliester 3% elastano). Se ata en el cuello con dos lazos y en la espalda se regula la medida con una tira.",
    },
  ];

  const miColeccion = collection(firestoreDB, "productos");

  productos.forEach((item) => {
    const newDoc = doc(miColeccion);
    setDoc(newDoc, item)
      .then(() => {
        console.log("Document written whit id:", newDoc.id);
      })
      .catch((err) => {
        console.log("Error adding document:", err);
      });
  });
}
