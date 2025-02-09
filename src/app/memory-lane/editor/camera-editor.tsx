import Camera from "@/components/camera/camera";
import EmptyIcon from "@/components/svg/empty-icon";
import React, { useState } from "react";
import { EditorProp, MemoryLaneEditorStateEnum } from "./memory-lane-editor";
import { useRestaurantThemeSettings } from "@/context/restaurant-theme-settings-context";

type CameraEditorProps = EditorProp & {
    setEditorState: (editorState: MemoryLaneEditorStateEnum) => void,
    setImageTaken?: (video: HTMLCanvasElement) => void
}
export default function CameraEditor(props:CameraEditorProps) { 
    const [isCameraOff, setIsCameraOff] = useState<boolean>(true);   
    const { restaurantThemeSettings } = useRestaurantThemeSettings();
    return <>        
        <div className='w-full py-20 flex flex-col justify-center items-center'
            onClick={()=>setIsCameraOff(false)}>
            <EmptyIcon />
            <div className="text-fontColor0 text-center text-h6 mt-5">{restaurantThemeSettings.editor.takePictureDescription}</div>
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