import React, { useEffect, useRef, useState } from "react";
import RatingStar from "@/components/rating/rating-star";
import { useMemoryLaneState } from "@/context/memory-lane-state-context";
import RatingTag from "@/components/rating/rating-tag";
import { EditorProp } from "./memory-lane-editor";
import Badge from "@/components/svg/badge";
import { Commenting } from "@/model/Commenting";

type FeedbackEditorProps = EditorProp;
export default function FeedbackEditor(props: FeedbackEditorProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { restaurant } = useMemoryLaneState();
    
    useEffect(() => {
        const context = canvasRef.current?.getContext('2d');
        
        if (context && props.imageTaken && canvasRef.current) {
            const width = props.imageTaken.width || 0;
            const height = props.imageTaken.height || 0;
            
            canvasRef.current.width = width;
            canvasRef.current.height = height*0.25;
            context.drawImage(props.imageTaken, 0, height*0.375, width, height, 0, 0, width, height);
        }
    }, [props.imageTaken]);

    const handleApprciationChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        if(props.setNewCommenting)props.setNewCommenting({...props.newCommenting, appreciation: e.target.value}as Commenting)
    }
    const handleStarSelected = (x: number) => {
        if(props.setNewCommenting)props.setNewCommenting({...props.newCommenting, rating: x} as Commenting)
    }
    const handleTagSelected = (tags: string[]) => {
        const tagIndexs = [] as number[];
        restaurant?.menu.forEach((x, index) => {
            tags.forEach((tag) => {
                if (tag === x) tagIndexs.push(index);
            });
        });
        if(props.setNewCommenting)props.setNewCommenting({ ...props.newCommenting, tags: tagIndexs} as Commenting)
    }

    return <>
        
        <div className="w-full mb-2">
            <div className="w-full text-fontMainColor text-h6 mb-1">FEEDBACK</div> 
            <canvas className="w-full rounded-md" ref={canvasRef} /> 
        </div>
        
        <div className="w-full mb-2">
            <div className="w-full text-fontMainColor text-h6 mb-1">RATING</div>
            <RatingStar totalStars={5} handleStarSelected={handleStarSelected} />
        </div>
        <div className="w-full mb-0">
            <div className="w-full text-fontMainColor text-h6 mb-1">TAGS</div>
            <RatingTag values={restaurant?.menu || [] as string[]} handleTagSelected={handleTagSelected}/>
        </div>
        <div className="w-full mb-[-50px]">
            <div className="w-full text-fontMainColor text-h6 mb-1">APPRICIATION</div> 
            <textarea className='w-full min-h-[120px] px-1 rounded-md text-fontMainColor bg-pageBackgroundSecondary1Color placeholder:text-fontMainPaceholderColor text-h6 focus:outline-none focus:ring-0'
                placeholder='Anything to say to the restaurant owner?' onChange={handleApprciationChange} />
        </div>       
        
        <div className='relative w-[50px] h-[50px] top-[-95%] right-[-50%]'><Badge/></div>    
    </>
}



