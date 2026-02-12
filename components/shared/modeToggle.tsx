"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
     
    {theme == 'dark' ? (<Button onClick={() => setTheme("light")} variant="outline" size="icon"><Sun    className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" /> </Button>) : ( <Button variant="outline" onClick={() => setTheme("dark")}  size="icon"><Moon   className="absolute h-[1.2rem] w-[1.2rem] scale-100 transition-all" /></Button>)  }

    


     


      {/* <Button variant="outline" size="icon">
          {theme == 'dark' ? (<Sun   onClick={() => setTheme("light")} className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />) : ''}

          {theme == 'light' ? (<Moon  onClick={() => setTheme("dark")}  className="absolute h-[1.2rem] w-[1.2rem] scale-100 transition-all" />) : ''}
          
          <span className="sr-only">Toggle theme</span>
        </Button> */}


      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            {theme == 'dark' ? (<Sun   onClick={() => setTheme("light")} className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />) : ''}

            {theme == 'light' ? (<Moon  onClick={() => setTheme("dark")}  className="absolute h-[1.2rem] w-[1.2rem] scale-100 transition-all" />) : ''}
            
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    
    </>
  )
}
