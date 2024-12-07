import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-center gap-20 px-3 py-1 items-center text-center'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <strong><u> ShopNow</u></strong></p>       
        <div className='flex items-center mr-2'>
            <p>English</p>
            <Image src='/dropdown.png' alt='dropdown' width={40} height={10}></Image>
        </div>
    </div>
  )
}

export default Header