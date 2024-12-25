import Camera from "@/components/camera/camera";
import EmptyIcon from "@/components/svg/empty-icon";
import React, { useState } from "react";
import { EditorProp, MemoryLaneEditorStateEnum } from "./memory-lane-editor";

type CameraEditorProps = EditorProp & {
    setEditorState: (editorState: MemoryLaneEditorStateEnum) => void,
    setImageTaken?: (video: HTMLCanvasElement) => void
}
export default function CameraEditor(props:CameraEditorProps) { 
    const [isCameraOff, setIsCameraOff] = useState<boolean>(true);   

    return <>        
        <div className='w-full py-20 rounded-xl bg-pageBackgroundSecondary0Color flex flex-col justify-center items-center'
            onClick={()=>setIsCameraOff(false)}>
            <EmptyIcon />
            <div className="text-fontSecondary0Color text-center text-h6 font-medium mt-3">Take a picture of your meal!</div>
        </div>
        
        {!isCameraOff && <Camera setImageTaken={(canvas) => {
            if(props.setImageTaken)props.setImageTaken(canvas);
            
            if (canvas) {
                props.setEditorState(MemoryLaneEditorStateEnum.MAKE_COMMENTS);
                setIsCameraOff(false);
            }
        }} setIsOff={setIsCameraOff} />}
        
    </>
}