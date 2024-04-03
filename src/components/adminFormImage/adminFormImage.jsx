import { upload } from '@/lib/action'
import React from 'react'

const AdminFormImage = () => {

        

  return (
    <div>
        <h1>file Upload</h1>
        <input type="file" name='file' />
        <input type="submit" value="Upload" />
    </div>
  )
}

export default AdminFormImage