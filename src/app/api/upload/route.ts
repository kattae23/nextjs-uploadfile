import {writeFile} from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

export async function POST(request: NextRequest) {

    try {
        const data = await request.formData()

    const file: FormDataEntryValue | null = data.get('file')

    if(!file) {
        return NextResponse.json(
            JSON.stringify({
                message: 'No file',
    
            }),
            {
                status: 400
            }
            )
    }

    if (file instanceof Blob) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const filePath = path.join(process.cwd(), 'uploads', file.name)
    writeFile(filePath, buffer)
    console.log('File uploaded to ', filePath)
    }

    return new Response(JSON.stringify({
        message: 'Uploaded File'
    }))
    } catch (error) {
        return NextResponse.json(
            JSON.stringify({
                message: 'No file',
    
            }),
            {
                status: 400
            }
            )
    }
    
}