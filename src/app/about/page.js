'use client'

import React, { useState, useEffect } from 'react'
import TitleBanner from "../../components/titleBanner"
import TextContainer from '../../components/textContainer'
import Image from "next/image"

function Page() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [
        "assets/shapes/purpleFlower.svg",
        "assets/shapes/blueStar.svg",
        "assets/shapes/purpleBlob.svg",
        "assets/shapes/purpleHex.svg"
    ]

    //auto play slides
    useEffect(() => {
        const maxSlide = slides.length - 1;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                let curr = prev;
                if (curr >= maxSlide) {
                    curr = 0
                }
                else {
                    curr += 1
                }
                console.log(curr);
                return curr;
            })
        }, 4000);

        return () => clearInterval(interval);
    }, [])

    const missionList = [
        {
            header: "Mission",
            body:
                "To empower all underprivileged youth globally with entrepreneurial education to drive local economic development and to alleviate the stresses of mass migration on international economies.",
            img: "/assets/shapes/purpleFlower.svg"
        },
        {
            header: "Vision",
            body:
                "SKYES vision is to see thriving, self-sustained communities globally, where empowered youth lead local economic growth and migration becomes a choice rather than a necessity.",
            img: "/assets/shapes/blueStar.svg"
        },
        {
            header: "Action",
            body:
                "Over 70% of rural youth worldwide lack access to practical entrepreneurship training. SKYES gives students the tools, mentorship, and resources to launch ventures that tackle local challenges, and drive social and economic progress.",
            img: "/assets/shapes/blueStair.svg"
        },
        {
            header: "Effect",
            body:
                `"Now I have an opportunity to pitch and receive financial assistance to kickstart my agriculture business. Through SKYES I'm empowered to achieve my dream of helping my parents and positively impacting my community." — Pema, Student at Shree Mangal Dvip`,
            img: "/assets/shapes/purpleBlob.svg"
        }
    ];
    return (
        <div>
            <TitleBanner
                img="/assets/aboutPageBanner.png"
                subheader="About SKYES"
                header="SKYES is about sharing knowledge to yield entrepreneurial skills"
                button={false}
            />
            <div className="flex flex-col gutter-y gutter-x w-full gap-[8rem]">
                <div className="flex flex-col lg:flex-row gap-[4rem] justify-between">
                    <div className="flex flex-col gap-[2rem] lg:w-[40%] h-[30rem]">
                        <Image
                            src={slides[currentSlide]}
                            width={800}
                            height={800}
                            alt="happy teacher"
                            className='h-full w-auto object-cover rounded-[2rem]'
                        />
                        <div className="flex w-full flex-row justify-center">
                            <div className="flex flex-row gap-[1rem] bg-[#F4F4F4] w-fit h-fit rounded-full px-[1.5rem] py-[0.5rem]">
                                {
                                    slides.map((item, key) => {
                                        return (
                                            <button className={`w-[1rem] h-[1rem] rounded-full border-[1.5px] border-slate-300 hover:cursor-pointer hover:border-myBlue
                                            ${key === currentSlide ?
                                                    "bg-myBlue" :
                                                    "bg-none"
                                                }
                                            `}
                                                key={key}
                                                onClick={() => {
                                                    setCurrentSlide(key)
                                                }}></button>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[2rem] w-full lg:w-[50%] justify-between">
                        <h2> Our Story</h2>
                        <div className="flex flex-col h-fit gap-[2rem]">
                            <div className="flex flex-col gap-[1rem]">
                                <h3> Where we started </h3>
                                <p>SKYES began in Nepal as an initiative to empower underprivileged students at Shree Mangal Dvip (SMD) School with practical business education. </p>
                            </div>
                            <div className="flex flex-col gap-[1rem]">
                                <h3> Our Growth </h3>
                                <p>What started as a localized project has since grown into a global youth empowerment initiative dedicated to equipping young people with entrepreneurial skills to drive sustainable community development.</p>
                            </div>
                            <div className="flex flex-col gap-[1rem]">
                                <h3> Future Steps </h3>
                                <p>After its success in Nepal, SKYES is expanding to new schools and countries, promoting sustainable, community-led innovation. Partnering with students, schools, mentors, and sponsors to further develop.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-[2rem]">
                    <h2> Our Objectives and Impacts</h2>

                    <div className="flex flex-row flex-wrap gap-[2rem]">
                        {missionList.map((item, key) => (
                            <div className="flex lg:flex-row md:flex-row flex-col gap-[2rem] lg:max-w-[48%] p-[2rem]  border-[1.5px] border-gray-200 rounded-[2rem] w-full" key={key}>
                                <div className="h-fill flex flex-col justify-center items-center lg:w-[40%] max-w-[4rem]">
                                    <Image
                                        src={item.img}
                                        width={800}
                                        height={800}
                                        alt="shape"
                                        className='w-fill h-auto'
                                    />
                                </div>
                                <div className="flex flex-col gap-[1rem]">
                                    <h3> {item.header} </h3>
                                    <p> {item.body} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page