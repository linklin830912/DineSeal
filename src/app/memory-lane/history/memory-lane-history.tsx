"use client"
import React, { useState } from "react"
import MemoryLaneHeader, { MemoryLaneHeaderStateEnum } from "../memory-lane-header"
import { useMemoryLaneState } from "@/context/memory-lane-state-context";
import { Commenting } from "@/model/Commenting";
import MemoryLaneCount from "../memory-lane-count";
import { mapStringToDate } from "@/mapper/mapDate";
import Image from "next/image";
export default function MemoryLaneHistory() { 
    const { commentings } = useMemoryLaneState();
    const [showCardCommenting, setShowCardCommenting] = useState<Commenting | null>(null);
    return <div className="w-full h-[100vh]">
        <div className='w-full h-full top-0 left-0 absolute grid grid-flow-row grid-rows-[auto_1fr_auto] py-5'>                        
            <div className='w-full h-auto'>
                <MemoryLaneHeader title="MEMORY COLLECTION" state={MemoryLaneHeaderStateEnum.HISTORY} goBackRoute="/memory-lane/"/>
            </div>
            {showCardCommenting===null && <div className="relative overflow-scroll px-5 py-3 flex flex-wrap flex-row justify-start items-start">{
                commentings?.map((x, index) => <div className=" relative m-1 w-[47%] h-[210px]" key={index}>
                    <HistoryCard commenting={x} handleShowCardIndex={() => {
                        setShowCardCommenting(x)
                    }} /></div>)
            }</div>}
            {showCardCommenting!==null && <div>
                <HistoryDetailCard commenting={showCardCommenting}handleShowCardIndex={() => {
                        setShowCardCommenting(null)
                    }}/>
            </div>}
            <div className='w-full h-auto flex justify-center items-center mt-5'>
                <MemoryLaneCount commentingCount={commentings?.length || 0} />                    
            </div> 
        </div>
    </div>
}

type HistoryCardProps = {
    commenting: Commenting,
    handleShowCardIndex:()=>void
}
function HistoryCard(props: HistoryCardProps) {
    const formattedDate = mapStringToDate(props.commenting.createTime ? props.commenting.createTime : "");
    return <button className="w-full h-full rounded-md bg-fontSecondary0Color p-1 flex flex-col"
        onClick={props.handleShowCardIndex}    
    >
        <div className="w-full h-[160px] overflow-hidden rounded-sm mb-2 relative">
            <Image width={150} height={10} style={{position:"relative", top:"-25%"}}
                src={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}
                alt={""}
                blurDataURL={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}
            />
        </div>
        <div className="flex flex-col justify-start items-start">
            <div className="text-fontMainColor text-h5 mb-1 text-start">{props.commenting.title}</div>
            {formattedDate && <div>
                <div className="text-mainSvgPath0Color text-h6 font-light">{`${formattedDate.day}.${formattedDate.month}.${formattedDate.year}, ${formattedDate.hours}:${formattedDate.minutes} ${formattedDate.AMPM}`}</div>
            </div>} 
        </div>
    </button>;
}
type HistoryDetailCardProps = {
    commenting: Commenting,
    handleShowCardIndex:()=>void
}
function HistoryDetailCard(props: HistoryDetailCardProps) {
    const formattedDate = mapStringToDate(props.commenting.createTime ? props.commenting.createTime : "");
    return <div className="w-full h-full px-3 py-5 flex flex-col"
    >
        <div className="w-full flex justify-center items-center">{formattedDate && <div>
                <div className="text-pageBackgroundColor text-h6 font-light">{`${formattedDate.day}.${formattedDate.month}.${formattedDate.year}, ${formattedDate.hours}:${formattedDate.minutes} ${formattedDate.AMPM}`}</div>
            </div>}</div>
        <div className="w-full h-[600px] rounded-md bg-fontSecondary0Color p-2 grid grid-flow-row">
            <div className="w-full relative overflow-hidden rounded-sm mb-2">
                
                <button className="absolute top-0 left-0 w-full flex justify-end z-30"
                    onClick={props.handleShowCardIndex}
                >switch</button>
            <Image width={310} height={20} style={{position:"relative"}}
                src={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}
                alt={""}
                blurDataURL={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}
            />
        </div>
        <div className="flex flex-col justify-start items-start">
            <div className="text-fontMainColor text-h5 mb-1 text-start">{props.commenting.title}</div>
            <div className="text-fontMainColor text-h6 mb-1 text-start">{props.commenting.description}</div>
            </div>
        </div>
    </div>;
}