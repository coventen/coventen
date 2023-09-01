import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from "firebase/storage";
import { app } from "@/firebase/fireabase.config";


const downloadUrl = "https://firebasestorage.googleapis.com/v0/b/covent%E2%80%A6=media&token=4d8808a6-2377-40af-ae9a-ad6223b30a9f"

const deleteImageFromDb = (url : string) => {
    const storage = getStorage(app);

  // Get a reference to the storage object from the download URL
  const storageRef = storage?.refFromURL(url);

  // Delete the file
  deleteObject(storageRef).then(() => {
    // File deleted successfully
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });






}

export default deleteImageFromDb