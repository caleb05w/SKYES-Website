import React from "react";
import TitleBanner from "@/components/titleBanner";
import TextContainer from "@/components/textContainer";
import Image from "next/image";
import ImageContainer from "@/components/imageContainer";
import {
  MdLightbulb,
  MdGroupAdd,
  MdRecordVoiceOver,
  MdOutlineAttachMoney,
  MdCoPresent,
} from "react-icons/md";
import { ImBook } from "react-icons/im";
import { TbAward } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa6";

function page() {
  const goals = [
    {
      header: "Problem Definition",
      body: "Identify and clearly define real community challenges that form the foundation of an entrepreneurial idea.",
      icon: "MdLightbulb",
    },
    {
      header: "Solution Articulation",
      body: "Develop and communicate practical, innovative solutions that directly address identified problems.",
      icon: "Ribbon",
    },
    {
      header: "Customer Acquisition",
      body: "Identify, attract, and engage customers through relationship-building and targeted outreach strategies.",
      icon: "MdGroupAdd",
    },
    {
      header: "Value Proposition Creation",
      body: "Craft a clear and compelling statement that defines how a product or service uniquely creates value for customers.",
      icon: "ImBook",
    },
    {
      header: "Stakeholders & Key Resources",
      body: "Map out essential partners, resources, and stakeholders needed to operate and sustain a venture effectively.",
      icon: "Handshake",
    },
    {
      header: "Marketing & Outreach",
      body: "Design creative, user-centered marketing strategies to promote ventures & build community engagement",
      icon: "MdRecordVoiceOver",
    },
    {
      header: "Financial Literacy & Budgeting",
      body: "Build foundational financial skills to plan budgets, manage resources, and ensure ideas are economically viable.",
      icon: "MdOutlineAttachMoney",
    },
    {
      header: "Pitch Development & Delivery",
      body: "Structure, refine, and confidently present business ideas through professional and persuasive pitches.",
      icon: "MdCoPresent",
    },
  ];

  const experienceList = [
    {
      header: "Interactive Workshops",
      body: "Interactive online workshops led by trained coordinators",
      icon: "/assets/shapes/blueStar.svg",
      img: "/assets/overviewWorkshops.png",
    },
    {
      header: "Mentorship",
      body: "Mentorship from professionals and student entrepreneurs",
      icon: "/assets/shapes/purpleFlower.svg",
      img: "/assets/overviewMentorship.jpg",
    },
    {
      header: "Community",
      body: "Projects rooted in community and economic growth",
      icon: "/assets/shapes/limePlant.svg",
      img: "/assets/overviewCommunity.png",
    },
    {
      header: "Final Competition",
      body: "A final Elevate Challenge in the form of a pitch competition",
      icon: "/assets/shapes/blueFish.svg",
      img: "/assets/overviewCompetition.png",
    },
  ];

  return (
    <div>
      <TitleBanner
        img="/assets/overviewPageBanner.png"
        subheader="Program Overview"
        header="A perfect blend of theory and practical experience"
        button={false}
      />

      <section className="flex flex-col gutter-x gutter-y gap-16 w-full">
        <div className="flex flex-col min-[74rem]:flex-row gap-8 lg:gap-16 items-center">
          <div className="min-[74rem]:min-w-[50vw]">
            <Image
              src="/assets/overviewClassroom.jpg"
              width={1280}
              height={960}
              alt="shape"
              className="w-fill h-auto rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <TextContainer
              title="Purpose & Curriculum "
              body="SKYES equips high school and early university students (ages 15-22), particularly from underrepresented or rural communities, with entrepreneurial skills to drive local development. Supported by the Charles Chang Institute for Entrepreneurship (CCIE) and Enactus SFU, the program integrates the SPARK Workbook to guide students in developing, pitching, and refining their business ideas."
            />
            <TextContainer
              title=" "
              body="*Note: Lesson and Curriculum is flexible and will tailored and
              localized to your region/area."
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 lg:gap-12">
          <h2>Learning Goals</h2>

          <div className="flex flex-row flex-wrap gap-4 md:gap-6 w-full">
            {goals.map((item, key) => {
              const Icon = item.icon;

              return (
                <div
                  className="px-[2.5rem] py-[1.5rem] border-[1.5px] border-gray-200 rounded-[24px] w-full lg:w-[48%]"
                  key={item.header}
                >
                  <div className="grid grid-cols-[max-content_2fr] grid-rows-[max-content_1fr] gap-6 md:gap-y-0 md:gap-x-10 items-center">
                    <div className="bg-[#CCDCF9] rounded-[0.6rem] max-w-max md:row-span-2">
                      {Icon === "MdLightbulb" ? (
                        <MdLightbulb
                          size={50}
                          color={"var(--blue)"}
                          className="p-2 min-h-6"
                        />
                      ) : Icon === "MdGroupAdd" ? (
                        <MdGroupAdd
                          size={50}
                          color={"var(--blue)"}
                          className="p-2 min-h-6"
                        />
                      ) : Icon === "ImBook" ? (
                        <ImBook
                          size={50}
                          color={"var(--blue)"}
                          className="p-2 min-h-6"
                        />
                      ) : Icon === "MdRecordVoiceOver" ? (
                        <MdRecordVoiceOver
                          size={50}
                          color={"var(--blue)"}
                          className="p-2 min-h-6"
                        />
                      ) : Icon === "MdOutlineAttachMoney" ? (
                        <MdOutlineAttachMoney
                          size={50}
                          color={"var(--blue)"}
                          className="p-2 min-h-6"
                        />
                      ) : Icon === "MdCoPresent" ? (
                        <MdCoPresent
                          size={50}
                          color={"var(--blue)"}
                          className="p-2 min-h-6"
                        />
                      ) : Icon === "Ribbon" ? (
                        <TbAward
                          size={50}
                          color={"var(--blue)"}
                          className="p-2 min-h-6"
                        />
                      ) : Icon === "Handshake" ? (
                        <FaHandshake
                          size={50}
                          color={"var(--blue)"}
                          className="p-2 min-h-6"
                        />
                      ) : (
                        ""
                      )}
                    </div>

                    <h3> {item.header} </h3>
                    <p className="col-span-2 md:col-span-1"> {item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex flex-col gutter-x gutter-y gap-20 w-full">
        <TextContainer
          title="The SKYES Experience"
          body="The program combines theory with practice through 12 weeks of workshops, activities, challenges, and mentorship.  Students will design sustainable solutions to local challenges, launch projects with seed funding through the Elevate Challenge, and grow into confident innovators. The SKYES experience merges theory and practice through:"
        />

        <div className="grid md:grid-cols-4 gap-8">
          {experienceList.map((item, key) => (
            <div key={item.header}>
              <ImageContainer
                header={item.header}
                body={item.body}
                icon={item.icon}
                img={item.img}
              ></ImageContainer>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
