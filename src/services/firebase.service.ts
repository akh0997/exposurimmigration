import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore/lite";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import db from "../firebase/firebase";
export class FirebaseService {
  async getRecordsByCollectionName(collectionName: string) {
    const docRef = collection(db, collectionName);
    const collectionData = await getDocs(docRef);
    return collectionData.docs.map((el) => el.data());
  }

  addRecord(collectionName: string, data: any) {
    const docRef = collection(db, collectionName);
    return addDoc(docRef, data);
  }

  async getRecordByID(collectionName: string, id: string) {
    return getDoc(doc(db, collectionName, id));
  }

  async uploadFile(file: File, key: string) {
    const storage = getStorage();
    const storageRef = ref(storage, key);
    return uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  }
  async getFile(key: string) {
    const storage = getStorage();
    const pathReference = ref(storage, key);
    return getDownloadURL(pathReference);
  }
}
