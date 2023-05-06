"use client"
import { Dispatch, FormEvent, SetStateAction } from "react";

interface Props {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  setFileName: Dispatch<SetStateAction<string>>
}

const HandleForm = ({file, setFile, setFileName}: Props) => {

    const handleSubmit = async (e: FormEvent): Promise<void> => {
      e.preventDefault();

      if (!file) return;
  

      const fileData = new FormData();
  
      fileData.set('file', file)
  
      try {
        const res: Response = await fetch('/api/upload', {
          method: 'POST',
          body: fileData,
        })
  
        if (res.ok) {
          console.log('File Uploaded')
        }
        await res.json()
  
      } catch (error) {
        throw new Error('An error ocurred')      
      } finally{
        setFile(null)
        setFileName('')
      }
    }

  return { handleSubmit }
}

export default HandleForm
