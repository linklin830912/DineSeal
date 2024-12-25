import BadgeIcon from "@/components/svg/badge-icon";
import { useMemoryLaneState } from "@/context/memory-lane-state-context";
import React from "react";

export default function MemoryLaneCount() { 
    const {commentings} = useMemoryLaneState();
    return (
        <div className="w-full flex flex-row justify-center items-center">
            <div className="bg-mainButton0Color w-fit px-3 py-1 mb-5 text-h6 rounded-[50px] mr-1">
                {`MEMORIES : ${commentings?.length}`}</div>
            <div className="bg-mainButton1Color w-fit px-2 py-1 mb-5 text-h6 rounded-[50px] flex flex-row justify-center items-center">
                <div className="w-[15px] mr-1"><BadgeIcon/></div>                
                <div>{`${commentings?.filter(x=>x.appreciation!=="").length}`}</div>
            </div>
        </div>
    );  // end of return statement
}