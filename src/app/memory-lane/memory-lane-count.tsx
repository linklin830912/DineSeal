import React from "react";
type MemoryLaneCountProps = {
    commentingCount: number
}
export default function MemoryLaneCount(props: MemoryLaneCountProps) { 
    return (
        <div className="bg-mainButton1Color w-fit px-3 py-1 mb-5 text-h6 rounded-xl">
            { `MEMORIES : ${props.commentingCount}`}
        </div>
    );  // end of return statement
}