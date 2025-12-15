"use client"

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { IoCloseOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";



function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <div className='h-[6rem]'>
            <div className="w-screen flex flex-row justify-end top-0 z-[5] fixed">
                <div className="flex lg:flex-row md:flex-row flex-col lg:gap-0 md:gap-0 gap-[2rem] md:justify-between lg:justify-between md:h-fit lg:h-fit h-fit p-[2rem] w-screen w-screen z-[10] bg-white/60 backdrop-blur">
                    <div className="flex w-full justify-between flex-row">
                        <Link href="/" className="hover:cursor-pointer">
                            <Image
                                src="/assets/LogoBlue.svg"
                                width={800}
                                height={800}
                                alt="Logo"
                                className="h-full w-auto"
                            /></Link>
                        <button onClick={() => { setOpen(!open) }} className="hover:cursor-pointer"><IoMdMenu className='lg:hidden md:hidden flex size-6' /></button>
                    </div>


                    <div className="lg:flex md:flex lg:flex-row md:flex-row flex-col gap-[1rem] md:gap-[2rem] lg:gap-[2rem] hidden">
                        <a href="/about" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F] text-nowrap"> About </p></a>
                        <a href="/program-overview" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F] text-nowrap"> Program Overview </p></a>
                        <a href="/get-involved" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F] text-nowrap"> Get Involved </p></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=himalayanskyes@enactussfu.com&su=Contact%20Us" target="_blank" rel="norefferer" className="hover:underline hover:cursor-pointer" > <p className="text-[#5F5F5F] text-nowrap">Contact Us</p> </a>
                    </div>
                </div>
            </div>

            {/* black overlay */}

            <button onClick={() => { setOpen(false) }} className='hover:cursor-pointer'>
                <div className={`fixed lg:h-fit lg:w-fit md:h-fit m:w-fit top-0 right-0
                ${open === true ?
                        "bg-black/40 h-screen w-screen z-[10]"
                        :
                        "bg-black/40 h-0 w-0"
                    }
                `}> </div>
            </button>
            {/* mobile navbar */}
            <div className={`flex flex-col fixed h-screen justify-between bg-white z-[20] top-[0] right-[0] transition-all duration-[300ms] ease-in-out py-[2rem]
            ${open === true ?
                    "w-[70vw] px-[3rem]"
                    :
                    "w-[0] px-[0]"
                }
                `}>
                <div className="flex flex-col gap-[2rem]">
                    <div className="flex w-full justify-between flex-row">
                        <Link href="/" className="hover:cursor-pointer">
                            <Image
                                src="/assets/LogoBlue.svg"
                                width={800}
                                height={800}
                                alt="Logo"
                                className="h-full w-auto"
                            /></Link>
                        <button onClick={() => { setOpen(!open) }} className="hover:cursor-pointer"><IoCloseOutline className='lg:hidden md:hidden flex size-6' /></button>
                    </div>


                    <div className="flex lg:flex-row md:flex-row flex-col gap-[1rem] md:gap-[2rem] lg:gap-[2rem]">
                        <button className='w-fit' onProgress={() => { setOpen(false) }}><a href="/about" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F] text-nowrap"> About </p></a></button>
                        <button className='w-fit' onProgress={() => { setOpen(false) }}><a href="/about" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F] text-nowrap"> Program Overview </p></a></button>
                        <button className='w-fit' onProgress={() => { setOpen(false) }}><a href="/about" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F] text-nowrap"> Get Involved </p></a></button>
                        <button className='w-fit' onProgress={() => { setOpen(false) }}><a href="/about" className='hover:underline hover:cursor-pointer'><p className="text-[#5F5F5F] text-nowrap"> Contact Us </p></a></button>
                    </div>
                </div >

                <p className='text-[#5F5F5F]'>@ Enactus SFU 2026</p>

            </div >

        </div >
    )
}

export default Navbar



