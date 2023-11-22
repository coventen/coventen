
import { NextRequest, NextResponse } from "next/server"


export async function POST(request: Request){
    try{
        const {email, password} = await request.json()


        console.log('email', email, '0')
      

        return NextResponse.json({message: "User Already Exists"}, {status: 200})

       
    }
    catch(e){
        return NextResponse.json({message: 'Something Went Wrong '}, {status: 500})
    }
}