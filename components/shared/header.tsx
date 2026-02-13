'use client'
import React, { useState, useEffect } from 'react'
import { Phone, Facebook, Youtube, Instagram, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './modeToggle'
import LogoutButton from './Logout'
import type { Session } from "next-auth"

type Props = {
  session: Session
}



const Header = ({session}:Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // console.log("session:",session)


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])





  return (
    <section className=''>


      {/* Main Header */}
      <div className={`main_header fixed top-0 w-full  z-20 ${isScrolled ? 'md:fixed top-0 w-full' : 'md:relative'}`}>
        <div className={`container ${isScrolled ? "py-0" : "py-2"}   ` }>
          <div className="header_inner flex justify-between items-center relative">
            
            <div className="header_left">
              <Link href="/">
                Logo
              </Link>
            </div>
            
            <div className='flex gap-2 items-center'>
              <ModeToggle />
              <div className="header_right hidden md:block">
                <ul className='flex gap-2 items-center font-bold'>
                  <li>
                    <Link className='hover:text-primary nav-underline px-2 py-1' href="/">Home</Link>
                  </li>
                </ul>
              </div>

              
              <LogoutButton session={session} />

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-primary focus:outline-none" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>

              {/* Mobile Navigation Menu */}
              {isMenuOpen && (
                <div className="absolute w-full left-0 top-full md:hidden bg-white shadow-lg h-[80vh] overflow-y-scroll">
                  <div className="container py-4 ">
                    
                    <ul className='flex flex-col gap-3 font-bold'>
                      <li>
                        <Link 
                          className='block hover:text-primary nav-underline px-2 py-2 border-b' 
                          href="/" 
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link 
                          className='block hover:text-primary nav-underline px-2 py-2 border-b' 
                          href="/about" 
                          onClick={() => setIsMenuOpen(false)}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link 
                          className='block hover:text-primary nav-underline px-2 py-2 border-b' 
                          href="/courses" 
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link 
                          className='block hover:text-primary nav-underline px-2 py-2 border-b' 
                          href="/blog" 
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link 
                          className='block hover:text-primary nav-underline px-2 py-2 border-b' 
                          href="/results" 
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Result
                        </Link>
                      </li>
                      <li>
                        <Link 
                          className='block hover:text-primary nav-underline px-2 py-2' 
                          href="/success-stories" 
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Success Stories
                        </Link>
                      </li>
                      <li>
                        <Link 
                          className='block hover:text-primary nav-underline px-2 py-2' 
                          href="/contact" 
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex flex-col gap-3">
                        <a className='flex items-center gap-2 text-sm' href="tel:+33753301875">
                          <Phone className='w-4 h-4' /> Paris 18: 07 53 30 18 75
                        </a>
                        <a className='flex items-center gap-2 text-sm' href="tel:+33756999085">
                          <Phone className='w-4 h-4' /> Pantin Hoche: 07 56 99 90 85
                        </a>
                      </div>
                      
                      <div className="socials flex gap-3 mt-4">
                        <a href="https://www.facebook.com/dailyfrenchbybornomala/" className='border rounded p-2 block hover:text-muted' target='_blank'> <Facebook className='w-5 h-5 ' /> </a>
                        <a href="https://www.youtube.com/channel/UC6o8HLJnUKj0bRwd5gKjKhg" className='border rounded p-2 block hover:text-muted' target='_blank'> <Youtube className='w-5 h-5 ' /> </a>
                      </div>
                    </div>


                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default Header