"use client"
import React, { useId, useRef} from 'react'
import FileHandler from './hooks/useHandleFileChange'
import HandleForm from './hooks/useHandleSubmit'
import Icon from './icons/Icon'
import Image from 'next/image'

export default function Home() {
  const uploadFile = useId()

  const {file, setFile, fileName, setFileName, handleFileChange} = FileHandler();

  const {handleSubmit} = HandleForm({file, setFile, setFileName});

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click()
  }

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='bg-zinc-950 p-5'>
        <h1 className='text-4xl text-center my-4'>Upload a file</h1>
        <form className='' onSubmit={handleSubmit}>
        <input
        ref={inputRef}
        className='bg-zinc-900 text-zing-100 p-2 rounded hidden  mb-2'
        type="file"
        id={uploadFile}
        onChange={handleFileChange}
        />

        <div onClick={handleClick} className='cursor-pointer text-center flex items-center justify-center py-2 pb-3'>
          <Icon styles='w-24 h-24' />
        </div>

          <h1 className='my-2 font-bold text-sm text-zinc-300'>{fileName}</h1>

        <button disabled={!file} className='bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50'>
          Upload!
        </button>
        {
          file && (
            <Image width={256} height={256} src={URL.createObjectURL(file)} alt={'Upload File'}  className='w-64 h-64 object-cover mx-auto mt-4'/>
          )
        }

      </form>
    </div>
    </div>
  )
}