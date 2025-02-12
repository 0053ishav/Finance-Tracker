import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const HeaderLogo = () => {
  return (
    <Link href="/">
        <div className='items-center hidden lg:flex'>
            <Image src="logo.svg" height={100} width={100} alt='logo'/>
            <p className='font-bold text-white text-2xl ml-2.5'>Finance</p>
        </div>
    </Link>
  )
}

export default HeaderLogo