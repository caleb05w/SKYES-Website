import React from "react";
import Image from "next/image";
import Button from "../components/button"

function titleBanner({ img, header, subheader, cta, title, button }) {
    const receivedHeader = header ?? "no header found";
    const receivedSubheader = subheader ?? "no subheader found";

    return (
        <div>
            <div className="relative">
                <Image
                    src={img}
                    alt="Hero image"
                    width={800}
                    height={600}
                    className="w-screen lg:h-auto object-cover h-[80vh]"
                />
                <div className="absolute bottom-0 flex flex-col lg:max-w-[70vw] m-[4rem] gap-[1rem]">
                    <div className="flex flex-col lg:mb-[4rem] md:mb-[2rem] mb-[1rem] gap-[1rem]">
                        <h3 className='text-white'>{receivedSubheader}</h3>
                        <h1 className='text-white'>{receivedHeader}</h1>
                    </div>
                    {/* //if button is true render button otherwise render non */}
                    {button === true ?
                        <Button
                            title={title}
                        ></Button>
                        :
                        ""
                    }
                </div>
            </div>
        </div >
    );
}

export default titleBanner;
