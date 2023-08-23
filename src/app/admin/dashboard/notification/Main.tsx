import React from 'react';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { db } from '@/firebase/fireabase.config';
import { v4 as uuid4 } from 'uuid';

const Main = () => {

    const getData = async () => {
        const colRef = collection(db, "notifications");

        try {
            const querySnapshot = await getDocs(colRef);
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };




    getData()


    // if (docSnap.exists()) {
    //     console.log("Document data:3", docSnap.data());
    //     const unsubscribe = onSnapshot(doc(db, "chats", currentModule), (doc) => {

    //         if (doc.exists()) {
    //             console.log("Current data: 54646", doc.data().messages);
    //             setMessages(doc.data().messages)
    //         }

    //         return () => unsubscribe();
    //     });
    // } else {
    //     await setDoc(doc(db, "chats", currentModule), { messages: [] });
    // }




    return (
        <div>

        </div>
    );
};



export default Main;