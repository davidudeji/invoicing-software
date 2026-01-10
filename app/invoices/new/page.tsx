"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"


export default function Home() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      value: formData.get("value"),
      description: formData.get("description"),
    };

    const res = await fetch("/api/billing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      alert("Billing saved!");
      e.currentTarget.reset();
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <main className="flex flex-col gap-5 h-full justify-center max-w-5xl mx-auto my-5 ">
      <div className="flex justify-between">
         <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>

      <form className="grid gap-4 max-w-xs">
        <div>
        <Label htmlFor="name" className="block mb-2 text-sm font-semibold">Billing Name</Label>
        <Input id="name" name="name" type="text" />
      </div>
      <div>
        <Label htmlFor="email" className="block mb-2 text-sm font-semibold">Billing Email</Label>
        <Input id="email" name="email"  type="email" />
      </div>
      <div>
        <Label htmlFor="value" className="block mb-2 text-sm font-semibold">Value</Label>
        <Input id="value" name="value"  type="text" />
      </div>
      <div>
        <Label htmlFor="description" className="block mb-2 text-sm font-semibold">Description</Label>
      <Textarea id="description" name="description" ></Textarea>
      </div>
        <div>
            <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
      
     </main>
    
    
  )
}
