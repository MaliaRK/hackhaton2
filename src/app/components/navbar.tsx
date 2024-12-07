import Image from 'next/image'
import React from 'react'
import Link from 'next/Link'
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from '@/components/ui/sheet'


const Navbar = () => {
  return (
    <div className='flex justify-around max-w-[1170px] my-5'>
        <h2><strong>Exclusive</strong></h2>
        <ul className='hidden md:flex gap-8'>
            <li><u>Home</u></li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
            <li><Link href='/error'>Error</Link></li>
        </ul>
        <div className='flex gap-4'>
            <div className='flex gap-2 rounded items-center bg-[#F5F5F5]'>
                <input type='text' placeholder='What are you looking for?' className='text-xs m-1 p-1 outline-none'></input>
                <Image src='/search.png' alt='search' width={20} height={10}></Image>
            </div>
            <Image src='/wishlist.png' alt='wishlist' width={32} height={10}></Image>
            <Image src='/cart.png' alt='cart' width={32} height={10}></Image>
        </div>
        <Sheet>
        <SheetTrigger  className='md:hidden'>
            <Image src='/hamburger.svg' alt='hamburger' width={30} height={30}></Image>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
            <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
            </ul>
            </SheetHeader>
        </SheetContent>
        </Sheet>
    </div>
  )
}

export default Navbar