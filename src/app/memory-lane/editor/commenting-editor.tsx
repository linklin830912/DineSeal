import React, { useEffect, useRef } from "react";
import { EditorProp } from "./memory-lane-editor";

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
            if(props.setNewCommenting)props.setNewCommenting({...props.newCommenting, title: e.target.value});
        }
    }
    const handleDescriptionChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => { 
        if (e.target.value) { 
            if(props.setNewCommenting)props.setNewCommenting({...props.newCommenting, description: e.target.value});
    }
    }

    return <>    
        <canvas className="w-full rounded-md" ref={canvasRef}/> 
        <input className='w-full text-fontMainColor placeholder:text-fontMainPaceholderColor text-h5 focus:outline-none focus:ring-0 font-bold'
            type='text' placeholder='TITLE' onChange={handleTitleChange}/>
        <textarea className='w-full min-h-[120px] rounded-md text-fontMainColor bg-pageBackgroundSecondary1Color placeholder:text-fontMainPaceholderColor text-h6 focus:outline-none focus:ring-0'
            placeholder='Caption your memory?' onChange={handleDescriptionChange} />
    </>
}


