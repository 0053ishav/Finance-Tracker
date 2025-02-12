import React from 'react'
import HeaderLogo from '@/components/Header-logo'
import Navigation from '@/components/Navigation'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import WelcomeMsg from '@/components/WelcomeMsg'
import { Filters } from '@/components/filters'

const Header = () => {
  return (
    <header className='bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36'>
        <div className='max-w-screen-2xl mx-auto'>
            <div className='h-full flex items-center justify-between mb-14'>
                <div className='flex items-center lg:gap-16'>
                    <HeaderLogo />
                    <Navigation />
                </div>
                <ClerkLoaded>
                  <UserButton />
                </ClerkLoaded>
                <ClerkLoading>
                  <Loader2 className='size-8 animate-spin text-slate-100'/>
                </ClerkLoading>
            </div>
            <WelcomeMsg />
            <Filters />
        </div>
    </header>
  )
}

export default Header