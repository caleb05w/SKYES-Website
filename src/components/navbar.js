import React from 'react'
import Image from "next/image"
import Link from "next/link"

function navbar() {
    return (
        <div>
            <div className='bg-black/40 absolute lg:h-fit lg:w-fit md:h-fit m:w-fit h-screen w-screen top-0 right-0 z-[5]'>
                <div className="flex flex-row justify-between h-fit px-[1rem] py-[1rem] w-screen z-[10] bg-white">
                    <Link href="/" className="hover:cursor-pointer">
                        <Image
                            src="/assets/LogoBlue.svg"
                            width={800}
                            height={800}
                            alt="Logo"
                            className="h-full w-auto"
                        /></Link>

                    <div className="flex flex-row gap-[2rem]">
                        <a href="/About" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F]"> About </p></a>
                        <a href="/About" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F]"> Program Overview </p></a>
                        <a href="/About" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F]"> Get Involved </p></a>
                        <a href="/About" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F]"> Contact Us </p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar