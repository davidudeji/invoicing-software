import pool from "@/lib/db"
import {NextResponse} from "next/server"

export async function POST(req: Request){
  try{
   const {name, email, value, description} = await req.json();
   if (!name || !email || !value){
      return NextResponse.json(
         {error: "Missing required fields"},
         {status: 400}
      );
   }

   const query = `
   INSERT INTO  billing (name, email, value, description)
   VALUES (?, ?, ?, ?)
   `;

   await pool.execute(query, [name, email, value, description]);

   return NextResponse.json({message: "Billing saved successfully"});
  }catch(error){
   return NextResponse.json({
      error: "Database error"
   },{status: 500});
  }
}