"use client"

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";
import Image from "next/image";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);

  const [baseImage, setbaseImage] = useState("")

  const uploadImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertImageToBase64(file)
    setbaseImage(base64)
  }
  
  const Promise = require('promise');

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
  
        reader.onload = function () {
          const base64String = reader.result?.toString().split(',')[1] || '';
          resolve('data:image/png;base64,' + base64String);
        };
  
        reader.readAsDataURL(file);
      } else {
        reject(new Error('Selected file is not an image.'));
      }
    });
  }

  return ( 
    <div>           

      <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>

        <input type="hidden" name="userId" value={userId} />
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="file" onChange={(e)=>{uploadImg(e)}} />
        <input type="hidden" name="url" value={baseImage} />
        {/* <Image src={baseImage} width={50} height={50} alt=""/> */}
        <textarea type="text" name="desc" placeholder="desc" rows={10} />
        <button>Add</button>
        {state?.error}
      </form>
    </div>
  );
};

export default AdminPostForm;



