import { db } from "../Firebase/firebase-config";
import {collection, getDocs, getDoc, addDoc, updateDoc , deleteDoc ,doc} from"firebase/firestore";

const mp3CollectionRef = collection(db,"mp3");
class Mp3DataService {
    addMp3 = (newMp3) => {
        return addDoc(mp3CollectionRef, newMp3);
    }

    updateMp3 = (id, updatedMp3) => {
        const mp3Doc = doc(db, "mp3", id)
        return updateDoc(mp3Doc, updatedMp3);
    }

    deleteMp3 = (id) => {
        const mp3Doc = doc(db, "mp3", id);
        return deleteDoc(mp3Doc);
    };
    getAllMp3 = () => {
        return getDocs(mp3CollectionRef);
    }
    getMp3 = (id) => {
        const mp3Doc = doc(db, "mp3", id);
        return getDoc(mp3Doc)
    }
}

export default new Mp3DataService();