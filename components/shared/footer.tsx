import React from 'react'
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "হোম", href: "/" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "কোর্সসমূহ", href: "/courses" },
    { name: "ব্লগ", href: "/blog" },
    { name: "যোগাযোগ", href: "/contact" },
    { name: "ফলাফল", href: "/results" },
    // { name: "DELF পরীক্ষা", href: "/exam" }
  ]

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-white" />,
      title: "ফোন নম্বর",
      details: [
        "প্যারিস ১৮: ০৭ ৫৩ ৩০ ১৮ ৭৫",
        "প্যান্টিন হোশে: ০৭ ৫৬ ৯৯ ৯০ ৮৫"
      ]
    },
    {
      icon: <Mail className="h-5 w-5 text-white" />,
      title: "ইমেল ঠিকানা",
      details: [
        "info@bornomala.com",
        "support@bornomala.com"
      ]
    },
    {
      icon: <MapPin className="h-5 w-5 text-white" />,
      title: "ঠিকানা",
      details: [
        "প্যারিস ক্যাম্পাস: ১২৩ রু ডি প্যারিস, ৭৫০১৮ প্যারিস",
        "প্যান্টিন ক্যাম্পাস: ৪৫৬ এভিনিউ ডি হোশে, ৯৩৫০০ প্যান্টিন"
      ]
    },
    {
      icon: <Clock className="h-5 w-5 text-white" />,
      title: "সময়সূচী",
      details: [
        "সোমবার - শুক্রবার: সকাল ৯টা - রাত ৮টা",
        "শনিবার - রবিবার: সকাল ১০টা - সন্ধ্যা ৬টা"
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/dailyfrenchbybornomala/" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/channel/UC6o8HLJnUKj0bRwd5gKjKhg" },
    // { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" }
  ]

  return (

    <>








    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">





        {/* Copyright */}
        <div  className="pt-8 border-t border-gray-800 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className=" text-sm text-center mb-4 md:mb-0 w-full">
              © {currentYear} <a className='' href="mailto:(mahmud.linked@gmail.com"> Mahmudul Hasan(mahmud.linked@gmail.com)</a>
            </p>



          </div>
        </div>
        



      </div>
    </footer>

    </>
  )
}

export default Footer