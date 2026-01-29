"use client"
import SubmitButton from "@/components/ui/submitButton"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import createAction from "@/app/action"
import { SyntheticEvent, useState, startTransition } from "react"


export default function Home() {
  const [state, setState] = useState("ready");
  async function handleOnSubmit(event: SyntheticEvent){
    event.preventDefault();
    if(state === "pending") return;
    setState('pending');
    const target = event.target as HTMLFormElement;
   
    startTransition(async () => {
    const formData = new FormData(target);
    await createAction(formData);
    console.log("hello")
    })
  }


  return (
 
    <main className="flex flex-col gap-5 h-full justify-center max-w-5xl mx-auto my-5 ">
      <div className="flex justify-between">
         <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>

      <form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-xs">
        <div>
        <Label htmlFor="name" className="block mb-2 text-sm font-semibold">Billing Name</Label>
        <Input id="name" name="name" type="text" required />
      </div>
      <div>
        <Label htmlFor="customer" className="block mb-2 text-sm font-semibold">Billing Email</Label>
        <Input id="customer" name="customer"  type="email" required />
      </div>
      <div>
        <Label htmlFor="value" className="block mb-2 text-sm font-semibold">Value</Label>
        <Input id="value" name="value"  type="number" required/>
      </div>
      <div>
        <Label htmlFor="description" className="block mb-2 text-sm font-semibold">Description</Label>
      <Textarea id="description" name="description" ></Textarea>
      </div>
        <div>
          <SubmitButton/>
        </div>
      </form>
      
     </main>
    
    
  )
}
