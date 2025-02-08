"use client"
import React, { useState } from "react"
import MemoryLaneHeader, { MemoryLaneHeaderStateEnum } from "../memory-lane-header"
import { useMemoryLaneState } from "@/context/memory-lane-state-context";
import { Commenting } from "@/model/Commenting";
import MemoryLaneCount from "../memory-lane-count";
import { mapStringToDate } from "@/mapper/mapDate";
import Image from "next/image";
import { TbSwitchHorizontal } from "react-icons/tb";
export default function MemoryLaneHistory() { 
    const { commentings } = useMemoryLaneState();
    const [showCardCommenting, setShowCardCommenting] = useState<Commenting | null>(null);
    return <div className='w-full h-[100vh] bg-gradient-to-b from-backgroundColor0 to-backgroundColor1'>   
        <div className='w-full h-full flex flex-col py-5'>
            <div className='w-full h-1/6'>
                <MemoryLaneHeader title='MEMORY LANE' state={MemoryLaneHeaderStateEnum.MAIN} goBackRoute='/memory-lane' />
            </div>
            <div className='w-full h-5/6 overflow-x-scroll'>
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
            </div>                
            <div className='w-full h-1/6'>
                <MemoryLaneCount />                    
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
    return <button className="w-full h-full bg-backgroundColor2 border-2 border-backgroundColor2 rounded-md p-1 flex flex-col"
        onClick={props.handleShowCardIndex}>
        <div className="w-full h-[160px] overflow-hidden rounded-sm mb-1">
            <Image width={150} height={10} style={{position:"relative", top:"-25%"}}
                src={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}
                alt={""}
                blurDataURL={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}
            />
        </div>
        <div className="flex flex-col justify-start items-start">
            <div className="text-fontColor1 text-h5 mb-1 text-start">{props.commenting.title}</div>
            {formattedDate && <div>
                <div className="text-fontColor1 text-h6 font-light">{`${formattedDate.day}.${formattedDate.month}.${formattedDate.year}, ${formattedDate.hours}:${formattedDate.minutes} ${formattedDate.AMPM}`}</div>
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
    return <div className="w-full h-fit px-3 py-5 flex flex-col">
        <div className="w-full flex justify-center items-center">{formattedDate && 
            <div className="text-fontColor0 text-h6 font-light">
                {`${formattedDate.day}.${formattedDate.month}.${formattedDate.year}, ${formattedDate.hours}:${formattedDate.minutes} ${formattedDate.AMPM}`}
            </div>}
        </div>
        
        <div className="w-full rounded-md bg-backgroundColor2 border-4 p-2 border-backgroundColor2" onClick={props.handleShowCardIndex}>
            <div className="w-full relative rounded-sm mb-2 ">
                <div className="w-[100%] ">
                    <Image width={300} height={20} style={{position:"relative"}}
                        src={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}
                        alt={""}
                        blurDataURL={`https://dinesealstorage.blob.core.windows.net/images/${props.commenting.imageId}.png`}/>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start">
                <div className="text-fontMainColor text-h5 mb-1 text-start">{props.commenting.title}</div>
                <div className="text-fontMainColor text-h6 mb-1 text-start">{props.commenting.description}</div>
            </div>
        </div>
    </div>;
}