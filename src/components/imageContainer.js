import React from "react";
import Image from "next/image";

function imageContainer({ header, body, icon, img }) {
  return (
    <div className="flex flex-col h-full gap-8 p-8 border-[1.5px] border-gray-200 rounded-2xl w-full overflow-hidden justify-between">
      <div className="grid grid-cols-[max-content_2fr] grid-rows-2 gap-6 md:flex md:flex-col md:gap-0">
        <div className="flex items-center md:mb-6">
          <Image
            src={icon}
            width={800}
            height={800}
            alt="shape"
            className="w-fill h-auto max-w-16 lg:w-[40%]"
          />
        </div>

        <div className="flex items-center md:mb-2">
          <h3> {header} </h3>
        </div>

        <p className="col-span-2 md:col-span-1"> {body} </p>
      </div>

      <Image
        src={img}
        width={800}
        height={800}
        alt={header}
        className="h-full w-auto object-cover max-h-62 rounded-2xl"
      />
    </div>
  );
}

export default imageContainer;
