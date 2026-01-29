import Link from "next/link"
import { Button } from "@/components/ui/button"
import {CirclePlus} from "lucide-react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="flex flex-col gap-5 h-full text-center justify-center max-w-5xl mx-auto my-5 ">
      <div className="flex justify-between">
     <h1 className="text-3xl font-bold">Invoices</h1>
     <p>
      
        <Button variant="ghost" className="inline-flex gap-2" asChild>
          <Link href="/invoices/new">
          <CirclePlus className="w-4 h-4"/>
          Create Invoice
          </Link>
          </Button>
    </p>
      </div>
      
    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
        <TableHead className="w-[100px] p-4">Date</TableHead>
        <TableHead className="p-4">Customer</TableHead>
        <TableHead className="p-4">Email</TableHead>
        <TableHead className="text-center p-4">Status</TableHead>
        <TableHead className="text-right p-4">Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium text-left p-4"><span className="font-semibold">12/01/2026</span></TableCell>
      <TableCell className="text-left p-4"><span className="font-semibold">Andrew C. Kent</span></TableCell>
      <TableCell className="text-left p-4"><span>andrew29@gmail.com</span></TableCell>
      <TableCell className="text-center p-4"><Badge className="rounded-full">Open</Badge></TableCell>
      <TableCell className="text-right p-4"><span className="font-semibold">$250.00</span></TableCell>
    </TableRow>
  </TableBody>
</Table>
     </main>
    
    
  )
}
