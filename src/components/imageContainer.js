import React from "react";
import Image from "next/image";

function imageContainer({ header, body, icon, img }) {
  return (
    <div className="flex flex-col gap-8 lg:max-w-[31%] p-8  border-[1.5px] border-gray-200 rounded-2xl w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center lg:w-[40%] max-w-16">
        <Image
          src={icon}
          width={800}
          height={800}
          alt="shape"
          className="w-fill h-auto"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3> {header} </h3>
        <p> {body} </p>
      </div>

      <Image
        src={img}
        width={800}
        height={800}
        alt={header}
        className="h-full w-auto object-cover rounded-2xl"
      />
    </div>
  );
}

export default imageContainer;
