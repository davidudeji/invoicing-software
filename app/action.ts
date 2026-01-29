"use server"
import {db} from "@/lib/db";
import { redirect } from "next/navigation";
 export default async function createAction(formData: FormData) {

    const name = formData.get('name') as string
    const customer = formData.get('customer') as string
    const value = Math.floor(parseFloat(String(formData.get('value'))) * 100)
    const description = formData.get('description') as string

   const result = await db.invoice.create({
        data: {
            name,
            customer,
            value,
            description,
            status: 'open'
        }
    })
    redirect(`/invoices/${result.id}`)
 }
