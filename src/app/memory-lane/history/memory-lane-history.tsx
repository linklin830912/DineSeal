"use client"
import React, { useEffect, useRef, useState } from "react"
import MemoryLaneHeader, { MemoryLaneHeaderStateEnum } from "../memory-lane-header"
import { useMemoryLaneState } from "@/context/memory-lane-state-context";
import { Commenting } from "@/model/Commenting";
import MemoryLaneCount from "../memory-lane-count";
import { mapStringToDate } from "@/mapper/mapDate";
import Image from "next/image";
export default function MemoryLaneHistory() { 
    const { commentings } = useMemoryLaneState();
    
    return <div className="w-full h-[100vh]">
        <div className='w-full h-full top-0 left-0 absolute grid grid-flow-row grid-rows-[auto_1fr_auto] py-5'>                        
            <div className='w-full h-auto'>
                <MemoryLaneHeader title="MEMORY COLLECTION" state={MemoryLaneHeaderStateEnum.HISTORY} goBackRoute="/memory-lane/"/>
            </div>
            <div className="relative overflow-scroll px-5 py-3 flex flex-wrap flex-row justify-start items-start">
                {
                    commentings?.map((x, index) => <div className=" relative m-1 w-[47%] h-[210px]" key={index}><HistoryCard commenting={x} /></div>)
                }                              
            </div>
            <div className='w-full h-auto flex justify-center items-center mt-5'>
                <MemoryLaneCount commentingCount={commentings?.length || 0} />                    
            </div> 
        </div>
    </div>
}

type HistoryCardProps = {
    commenting: Commenting
}
function HistoryCard(props: HistoryCardProps) {
    const formattedDate = mapStringToDate(props.commenting.createTime ? props.commenting.createTime : "");
    return <div className="w-full h-full rounded-md bg-fontSecondary0Color p-1 grid grid-rows-[auto fit]">
        <div className="w-full overflow-hidden rounded-sm mb-2">
            <Image width={150} height={10} style={{position:"relative", top:"-25%"}}
                src={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}
                alt={""}
                placeholder="blur"
                blurDataURL={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}
            />
        </div>
        <div>
            <div className="text-fontMainColor text-h5 mb-1">{props.commenting.title}</div>
            {formattedDate && <div>
                <div className="text-mainSvgPath0Color text-h6 font-light">{`${formattedDate.day}.${formattedDate.month}.${formattedDate.year}, ${formattedDate.hours}:${formattedDate.minutes} ${formattedDate.AMPM}`}</div>
            </div>} 
        </div>
        
    </div>;
}