import React, { useEffect, useRef } from "react";
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

    return <div className="relative h-full bg-backgroundColor2 flex flex-col">
        
        <div className="w-full mb-2">
            <div className="w-full text-fontColor1 text-h6 mb-1">FEEDBACK</div> 
            <canvas className="w-full rounded-md" ref={canvasRef} /> 
        </div>
        
        <div className="w-full mb-2">
            <div className="w-full text-fontColor1 text-h6 mb-1">RATING</div>
            <RatingStar totalStars={5} handleStarSelected={handleStarSelected} />
        </div>
        <div className="w-full mb-2">
            <div className="w-full text-fontColor1 text-h6 mb-1">TAGS</div>
            <RatingTag values={restaurant?.menu || [] as string[]} handleTagSelected={handleTagSelected}/>
        </div>
        <div className="w-full">
            <div className="w-full text-fontColor1 text-h6">APPRICIATION</div> 
            <textarea className='w-full px-2 py-1 rounded-md text-fontColor1 bg-buttonColor2 text-h4 focus:outline-none'
                placeholder='Anything to say to the restaurant owner?' onChange={handleApprciationChange} />
        </div>       
        
        <div className='absolute w-[50px] h-[50px] top-[-25px] right-[-25px]'><Badge/></div>    
    </div>
}



