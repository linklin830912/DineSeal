import React, { useEffect, useRef } from "react";
import { EditorProp } from "./memory-lane-editor";
import { Commenting } from "@/model/Commenting";
import { useRestaurantThemeSettings } from "@/context/restaurant-theme-settings-context";

type CommetingEditorProps = EditorProp;
export default function CommentingEditor(props:CommetingEditorProps) { 
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => { 
        const context = canvasRef.current?.getContext('2d');        
        if (context && props.imageTaken && canvasRef.current) {
            const width = props.imageTaken.width || 0;
            const height = props.imageTaken.height || 0;
            
            canvasRef.current.width = width;
            canvasRef.current.height = height*0.5;
            context.drawImage(props.imageTaken, 0, height*0.25, width, height, 0, 0, width, height);
        }
    }, [props.imageTaken]);

    const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) { 
            if(props.setNewCommenting)props.setNewCommenting({...props.newCommenting, title: e.target.value}as Commenting);
        }
    }
    const handleDescriptionChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => { 
        if (e.target.value) { 
            if(props.setNewCommenting)props.setNewCommenting({...props.newCommenting, description: e.target.value}as Commenting);
    }
    }
    const { restaurantThemeSettings } = useRestaurantThemeSettings();
    return <div className="relative h-full flex flex-col bg-backgroundColor2">    
        <canvas className="w-full rounded-md mb-2" ref={canvasRef} /> 
        <div className="w-full">
            {restaurantThemeSettings.editor.haveTitle && <input className='w-full text-fontColor1 rounded-md bg-buttonColor2 text-h4 px-2 py-1 focus:outline-none mb-2'
                type='text' placeholder={restaurantThemeSettings.editor.titleText} onChange={handleTitleChange}/>}
            {restaurantThemeSettings.editor.haveCaptions && <textarea className='w-full min-h-20 text-fontColor1 rounded-md bg-buttonColor2 text-h4 px-2 py-1 focus:outline-none'
                placeholder={restaurantThemeSettings.editor.captionsText} onChange={handleDescriptionChange} />}
        </div>
        
    </div>
}



