"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const NavigationTestPage = () => {

    const router = useRouter()
    const pathName = usePathname() 
    const searchParams = useSearchParams()
    const q = searchParams.get("q")

    console.log(q)

    console.log(pathName)

    const handleClick = () => {
        console.log('clicked')
        router.forward()
    }
  return (
    <div>
        <Link href="/" prefetch={false}>click</Link>
        <button onClick={handleClick}>Write and Redirect</button>
    </div>
    )
}

export default NavigationTestPage