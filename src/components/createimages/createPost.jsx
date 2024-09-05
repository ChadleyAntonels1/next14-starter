'use client'
import Image from 'next/image';
import React, { useState } from 'react'

function CreatePost() {

  const [seletcedFile, setSeletcedFile] = useState([])

  const onFileSelected = (e) =>{
    const files = e.target.files;
    
    for (let i=0;i<files?.length;i++)
    {
      const file= files[i]
      setSeletcedFile((prev)=> [...prev,file])
    }
    for (let i=0;i<files?.length;i--)
      {
        const file= files[i]
        setSeletcedFile((prev)=> [...prev,file])
      }
  }

    const onImageRemove=(image, index)=>{
      const result= seletcedFile.filter((item)=> item!=image);
      
      setSeletcedFile(result)

    }
  return (
    <div>
      <div>
          {seletcedFile.map ((image,index)=>(
            <div key={index}>
              <h2 className=' cursor-pointer' onClick={()=>onImageRemove(image,index)}>x</h2>
              <Image src={URL.createObjectURL(image)} width={50} height={50} />
            </div>
          ))}
          <input type='file' multiple={true} onChange={onFileSelected}/>
      </div>
    </div>
  )
}

export default CreatePost