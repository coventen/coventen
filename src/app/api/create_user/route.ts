import { createUser } from "@/firebase/createFirebaseUser";
import { NextResponse } from "next/server"
import {v4 as uuid} from 'uuid'


export async function POST(request: Request){
    try{
        const {email, password} = await request.json()
        const uid = uuid();

     
        // Call the createUser function to create a new user
        createUser(uid, email, password)
            .then((userRecord) => {
                return NextResponse.json({message: "Account created successfully"}, {status: 201})
            })
            .catch((error) => {
                console.log('Error creating new user: 00000000000', error);
                return NextResponse.json({message: error?.message}, {status: 400})
            })




       
   

       
    }
    catch(e){
        return NextResponse.json({message: 'Something Went Wrong '}, {status: 500})
    }
}