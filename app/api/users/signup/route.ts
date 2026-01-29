import connect from "@/dbConfig/dbConfig";

import User from "@/models/userModel"
import {NextRequest, NextResponse} from "next/server"
import bcryptjs from "bcryptjs";



await connect()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log(reqBody)

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newuser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newuser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfullly",
            success: true,
            savedUser
        })

    }catch(error: unknown){
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        return NextResponse.json({error: errorMessage},
            {status: 500})
    }
}