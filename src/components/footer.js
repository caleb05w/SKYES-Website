import React from 'react'
import Image from "next/image"
import { FaExternalLinkAlt, FaLink, FaVoicemail } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";





function footer() {
    return (
        <div className='bg-[#181818] gutter-x gutter-y lg:gap-0 gap-[4rem] flex lg:flex-row flex-col justify-between w-[100vw] items-start h-fit'>
            <div className="flex flex-col gap-[2rem] lg:max-w-[30%]">
                <Image
                    src="/assets/Logo.svg"
                    height={800}
                    width={800}
                    alt="Skyes Logo"
                    className='lg:max-w-[30%] h-auto mt-[0.8rem] min-w-[10rem]'
                />
                <p className="text-[#A9A9A9]">
                    Enactus SFU and SKYES acknowledges the unceded Traditional Coast Salish Lands including the Tsleil-Waututh (səl̓ilw̓ətaʔɬ), Kwikwetlem (kʷikʷəƛ̓əm), Squamish (Sḵwx̱wú7mesh Úxwumixw) and Musqueam (xʷməθkʷəy̓əm) Nations upon whose lands we work and play on.
                </p>
            </div>
            <div className="flex flex-col lg:max-w-[30%] gap-[1rem] min-h-full ">
                <h2 className='text-[#F5E9E3]'> Quick Links </h2>
                <div className="flex flex-row flex-wrap gap-[1rem]">
                    <a href="/about" className='hover:mouser-pointer hover:underline text-[#A9A9A9]'> <p className='text-nowrap'> About </p></a>
                    <a href="/getInvolved" className='hover:mouser-pointer hover:underline text-[#A9A9A9]'> <p className='text-nowrap'> Get Involved </p></a>
                    <a href="/programOverview" className='hover:mouser-pointer hover:underline text-[#A9A9A9]'> <p className='text-nowrap'> Program Overview </p></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=himalayanskyes@enactussfu.com&su=Contact%20Us" target="_blank" rel="norefferer" className='hover:mouser-pointer  hover:underline text-[#A9A9A9]'> <p className='text-nowrap'> Contact Us </p></a>

                </div>
            </div>
            <div className="flex flex-col gap-[1rem] h-full">
                <h2 className='text-[#F5E9E3]'> Get in Touch </h2>
                <div className="flex flex-row flex-wrap gap-[1rem]">
                    <a className="flex flex-row gap-[0.6rem]" href="https://mail.google.com/mail/?view=cm&fs=1&to=himalayanskyes@enactussfu.com&su=Contact%20Us" target="_blank" rel="norefferer">  <FaExternalLinkAlt className='text-[#A9A9A9] h-full items-center' /> <p className='text-[#A9A9A9] hover:cursor-pointer hover:underline'> Email </p></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=himalayanskyes@enactussfu.com&su=Contact%20Us" target="_blank" rel="norefferer" className='flex flex-row gap-[0.6rem]'> <FiMail className=' text-[#A9A9A9] h-full items-center' /> <p className='text-[#A9A9A9] hover:cursor-pointer hover:underline'> Apply </p> </a>
                    <a href="https://www.instagram.com/enactussfu/" className="flex flex-row gap-[0.6rem]" target="_blank">  <FaInstagram className='text-[#A9A9A9] h-full items-center' /> <p className='text-[#A9A9A9] hover:cursor-pointer hover:underline'> Instagram </p></a>
                    <a href="https://www.linkedin.com/company/enactussfu/" target="_blank" className="flex flex-row gap-[0.6rem]"> <FaLinkedin className='text-[#A9A9A9] h-full items-center' /> <p className='text-[#A9A9A9] hover:cursor-pointer hover:underline'> LinkedIn </p></a>
                </div>
            </div>
        </div >
    )
}

export default footer