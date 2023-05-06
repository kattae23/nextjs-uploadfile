"use client"
import React, { useState } from 'react'

const FileHandler = () => {

    const [ file, setFile ] = useState<File | null>(null);
    const [ fileName, setFileName ] = useState<string>('No selected file');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target?.files?.[0]) return new Error("There's no a valid file type");
      setFile(event.target.files[0])
      setFileName(event.target.files[0].name)
    }

  return {file, setFile, fileName, setFileName, handleFileChange}
}

export default FileHandler
