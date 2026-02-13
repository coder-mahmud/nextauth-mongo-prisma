"use client"

import { useTransition } from "react"
import { logoutAction } from "@/app/(root)/(auth)/logout/actions"
import type { Session } from "next-auth"
import Link from "next/link"

type Props = {
  session: Session
}

export default function LogoutButton({session}:Props) {
  const [pending, startTransition] = useTransition()

  if(!session){
    return <Link href="/login">Login</Link>
  }

  return (
    <button
      onClick={() => startTransition(() => logoutAction())}
      disabled={pending}
      className="px-4 py-2 bg-black text-white rounded-lg"
    >
      {pending ? "Logging out..." : "Logout"}
    </button>
  )
}
