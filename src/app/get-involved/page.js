import React from "react";
import TitleBanner from "../../components/titleBanner";
import TextContainer from "../../components/textContainer";
import Image from "next/image";
import Button from "../../components/button";
import ImageContainer from "@/components/imageContainer";

function page() {
  const collabList = [
    {
      header: "Visibility",
      body: "SKYES is well-positioned to amplify sponsor visibility through our internal network and SFU’s broader student body of over 35,000.",
      icon: "/assets/shapes/blueFlower.svg",
      img: "/assets/getInvolvedVisibility.png",
    },
    {
      header: "Support System",
      body: "By partnering with SKYES, you support our mission to empower under-resourced youth in Nepal through entrepreneurial education.",
      icon: "/assets/shapes/purpleFlower.svg",
      img: "/assets/getInvolvedSupport.png",
    },
    {
      header: "Opportunity",
      body: "We offer an invaluable opportunity to showcase your organization to an audience of volunteers, mentors and advisors.",
      icon: "/assets/shapes/limeFlower.svg",
      img: "/assets/getInvolvedOpportunity.png",
    },
  ];

  const involvedList = [
    {
      header: "Enroll your students today",
      body: "Inspires students to turn entrepreneurship into a force for meaningful change by blending global best practices with local impact.",
      icon: "/assets/shapes/blueStar.svg",
      title: "Partner Now",
    },
    {
      header: "Make an impact on our youth",
      body: "Guide our youth through the difficult journey of being an entrepreneur and making a global impact while supporting their local community",
      icon: "/assets/shapes/purpleFlower.svg",
      title: "Become a Member",
    },
    {
      header: "Support SKYES' mission",
      body: "Sponsor seed funding to help young entrepreneurs drive sustainable business growth and local economies.",
      icon: "/assets/shapes/limePlant.svg",
      title: "Sponsor SKYES",
    },
  ];

  return (
    <div>
      <TitleBanner
        img="/assets/getInvolvedPageBanner2.png"
        subheader="Get Involved"
        header="Contribute to SKYES' mission by actively mentoring, sponsoring, or joining us!"
        button={false}
      />

      <section className="flex flex-col gutter-x gutter-y gap-[2rem] w-full">
        <TextContainer
          title="Why Collaborate with SKYES?"
          body="Together, we can create lasting change and broaden your organization's influence within a global community dedicated to social progress."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {collabList.map((item, key) => (
            <ImageContainer
              header={item.header}
              body={item.body}
              icon={item.icon}
              img={item.img}
              key={item.header}
            ></ImageContainer>
          ))}
        </div>
      </section>

      <section className="flex flex-col gutter-x gutter-y gap-[2rem] w-full">
        <h2>Get involved with us!</h2>

        <div className="flex flex-col gap-[1rem]">
          {involvedList.map((item, key) => (
            <div
              className="flex flex-col md:flex-row gap-[2rem] p-[2rem] border-[1.5px] border-gray-200 rounded-[2rem] w-full"
              key={key}
            >
              <div className="flex flex-col justify-center items-center ">
                <Image
                  src={item.icon}
                  width={800}
                  height={800}
                  alt="shape"
                  className="w-fill h-auto max-w-[4rem]"
                />
              </div>

              <div className="flex flex-col min-[74rem]:flex-row justify-between w-full gap-4">
                <div className="flex flex-col gap-[1rem] max-w-[37rem]">
                  <h3> {item.header} </h3>
                  <p> {item.body} </p>
                </div>

                <div className="flex items-center">
                  <Button
                    title={item.title}
                    cta="mailto:himalayanskyes@enactussfu.com"
                  ></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
