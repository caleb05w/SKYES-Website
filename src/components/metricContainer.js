import React from 'react'
import Image from "next/image"

function metricContainer({ header, subheader, img }) {
    return (
        <div className='px-[2.5rem] py-[1.5rem] border-[1.5px] border-gray-200 rounded-[24px] lg:w-[32%] md:w-[100%] w-full'>
            <div className="flex flex-row gap-[2.5rem]">
                <Image
                    src={img}
                    width={800}
                    height={600}
                    alt="square blue shape"
                    className='max-w-[3rem] height-auto'
                />

                <div className="flex flex-col lg:max-w-[100%] ">
                    <h3> {header ?? "no header"} </h3>
                    <p> {subheader ?? "no body"}</p>
                </div>
            </div>
        </div>
    )
}

export default metricContainer