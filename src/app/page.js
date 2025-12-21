"use client"

import TitleBanner from "../components/titleBanner"
import Button from "../components/button"
import TextContainer from "../components/textContainer"
import MetricContainer from "../components/metricContainer"

import Image from "next/image"
import { FaArrowRight } from "react-icons/fa";



export default function Home() {

  const metrics = [
    {
      header: "91%",
      subheader: "Of students in 2023/2024 expressed entrepreneurship as a viable career path",
      image: "/assets/shapes/blueblob.svg",
    },
    {
      header: "71%",
      subheader: "Average on entrepreneurship literacy self-assessments administered by SKYES",
      image: "/assets/shapes/purplehex.svg",
    },
    {
      header: "1,550+",
      subheader: "Mentorship hours dedicated towards participants",
      image: "/assets/shapes/limeButterfly.svg",
    },
    {
      header: "40+",
      subheader: "Youth entrepreneurs across 2 regions",
      image: "/assets/shapes/indigoFlower.svg",
    },
    {
      header: "100%",
      subheader: "Program completion rate since launch",
      image: "/assets/shapes/violetStair.svg",
    },
  ];

  return (
    <div className=" w-screen justify-center items-center flex-1 flex flex-col gap-2">
      <TitleBanner
        img="/assets/homePageBanner3.png"
        subheader="Welcome to SKYES"
        header="Where we empower all underprivileged youth globally with Entrepreneurial Education to drive local economic development."
        button={true}
        title="Connect with Us!"
      />

      <div className="flex flex-col gap-[8rem] gutter-y gutter-x w-full">
        <div className="flex flex-row justify-start lg:w-[60%]">
          <TextContainer
            title="Join our mission to help our youth."
            body="Today, SKYES partners with schools and organizations worldwide to inspire youth-led innovation and foster long-term social impact. By combining global best practices with local relevance, SKYES empowers students to see entrepreneurship as a pathway to creating meaningful change."
          />
        </div>



        <div className="flex flex-col gap-[2rem] w-full">
          <h2> Our Impact at a glance.</h2>
          <div className='flex flex-row flex-wrap gap-[1rem] '>
            {/* renders only if metrics exists, and maps to above */}
            {metrics ?
              metrics.map((item, key) => {
                return (
                  <MetricContainer
                    key={key}
                    header={item.header}
                    subheader={item.subheader}
                    img={item.image}
                  />
                );
              })
              :
              ""
            }
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-[4rem]">
          <div className="flex  items-center">
            <TextContainer
              title="Our mission supported by our peers"
              body="Recently, SKYES received national recognition, placing 1st in the TD Entrepreneurship Challenge, 2nd in the Desjardins Youth Empowerment Challenge at Western Canada Enactus Regionals Exposition, and advancing as a semi-finalist at Enactus Canada’s Nationals Exposition. "
            />
          </div>
          <Image
            src="/assets/homePageMission.png"
            width={800}
            height={800}
            alt="Our Team"
            className='lg:max-w-[40%] md:max-w-[100vw] max-w-full h-auto object-cover rounded-[1rem]'
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between bg-[#F8F8F8] w-full gutter-x lg:py-[8rem] py-[4rem] lg:gap-0 gap-[4rem]">
        <div className="flex items-center flex-col items-start gap-[1.5rem]">
          <TextContainer
            title="Partner with SKYES today!"
            body="Sponsor seed funding for student ventures to promote local entrepreneurship and circular economies. Partnering with SKYES connects you with schools, organizations, and mentors worldwide—boosting your brand while empowering youth innovation in underserved regions. "
          />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=himalayanskyes@enactussfu.com&su=Contact%20Us" target="_blank" rel="norefferer" className='flex flex-row gap-[0.5rem] items-center hover:cursor-pointer'><h5 className='text-myBlue font-medium text-[1.2rem] '> Connect with Us</h5> <FaArrowRight className='text-myBlue' /> </a>
        </div>
        <div className="flex flex-row gap-[1rem]">
          <Image
            src="/assets/shapes/blueblob.svg"
            width={800}
            height={800}
            alt="Our Team"
            className='lg:max-w-[10vw] max-w-[8rem] h-auto'
          />

          <Image
            src="/assets/shapes/purplehex.svg"
            width={800}
            height={800}
            alt="Our Team"
            className='lg:max-w-[10vw] h-auto max-w-[8rem]'
          />

          <Image
            src="/assets/shapes/limeButterfly.svg"
            width={800}
            height={800}
            alt="Our Team"
            className='lg:max-w-[10vw] h-auto max-w-[8rem]'
          />

        </div >
      </div >
    </div >
  );
}
