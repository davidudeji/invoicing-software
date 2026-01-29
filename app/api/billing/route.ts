import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, customer, value, description } = body

    const invoice = await db.invoice.create({
      data: {
        name,
        customer,
        value,
        description,
      },
    })

    return NextResponse.json(invoice, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to create invoice" },
      { status: 500 }
    )
  }
}

