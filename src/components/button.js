import React from "react";
import { HiExternalLink } from "react-icons/hi";

function button({ title, cta }) {
  const receivedTitle = title ?? "no CTA";
  return (
    <a href={cta ?? "https://www.instagram.com/enactussfu/"} target="_blank">
      <div className="bg-myBlue rounded-[24px] py-[0.625rem] px-[1rem] w-fit hover:cursor-pointer hover:bg-[#2C3BA7] duration-200 ease-in-out flex flex-row gap-[0.4rem] ">
        <h3 className="text-white ">{receivedTitle}</h3>
        <HiExternalLink className="text-white item-center min-h-[1.8rem] size-[1.6rem]" />
      </div>
    </a>
  );
}

export default button;
