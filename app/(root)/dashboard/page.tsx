import { auth } from "@/auth"
import { redirect } from "next/navigation"


export default async function Dashboard() {
  const session = await auth()
  if (!session) redirect("/login")
  console.log("session",session)

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">
        Welcome {session.user?.name} ({session.user?.role} sir!)
      </h1>
    </div>
  )
}
