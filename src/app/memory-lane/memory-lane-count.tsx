import BadgeIcon from "@/components/svg/badge-icon";
import { useMemoryLaneState } from "@/context/memory-lane-state-context";
import React from "react";

export default function MemoryLaneCount() { 
    const {commentings} = useMemoryLaneState();
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-buttonColor0 px-2 py-1 text-h6 rounded-[50px] mr-2">
                {`MEMORIES : ${commentings?.length}`}</div>
            <div className="bg-buttonColor1 px-2 py-1 text-h6 rounded-[50px] flex justify-center items-center">
                <div className="w-[15px] mr-1"><BadgeIcon/></div>                
                <div>{`${commentings?.filter((x)=>x.appreciation!=="").length}`}</div>
            </div>
        </div>
    );
}