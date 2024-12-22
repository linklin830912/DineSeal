import React, { useEffect, useState } from "react";
import StarIcon from "../svg/star-icon";

type RatingStarProps = {
    totalStars: number;
    handleStarSelected:(x:number) => void;
};
export default function RatingStar(props: RatingStarProps) { 
    const [selectStars, setSelectStars] = useState<number>(-1);
    const [isSelectList, setIsSelectList] = useState<boolean[]>([]);
    useEffect(() => {
        const array = Array(props.totalStars).fill(false);
        setIsSelectList(array);
    }, [])
    useEffect(() => { 
        let array = Array(props.totalStars).fill(false);
        array = array.map((x, index)=>index).map((x) => x <= selectStars);
        setIsSelectList(array);
        props.handleStarSelected(selectStars);
    }, [selectStars])

    return <div className="w-full">
        <div className="w-full flex flex-row justify-between items-center px-1">            
            {isSelectList.map((x, buttonIndex) =>
                <button key={buttonIndex} className="w-[20px] h-[20px] mr-2"
                    onClick={() => {
                        setSelectStars(buttonIndex)
                    }}
                ><StarIcon isFill={x} /></button>            
            )}
        </div>
    </div>;
}