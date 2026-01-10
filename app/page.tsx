import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
   
      <main className="flex  h-full text-center gap-10 justify-between max-w-5xl mx-auto ">
        <h1 className="text-4xl font-bold">Invoicing Software</h1>
        <p>
        <Button asChild className="mt-2">
          <Link href="dashboard"> Sign In</Link>
        </Button>
        </p>
      </main>
  
  );
}
