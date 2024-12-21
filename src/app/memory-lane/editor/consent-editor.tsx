import React, { useEffect, useRef, useState } from "react";
import { EditorProp } from "./memory-lane-editor";
type ConsentEditorProps = EditorProp & {setIsAgreed: (x:boolean)=>void};
export default function ConsentEditor(props: ConsentEditorProps) {
    

    return <> 
        <div className="flex flex-col w-full p-3">
            <div className="w-full bg-fontSecondary1Color text-fontSecondary0Color text-center text-h6 rounded-lg px-5 py-2 mb-2">
                WE MAY USE THIS INFO TO FOR OUR SOCIAL MEDIA 
            </div>
            <div className="w-full text-fontMainColor text-center text-h6 mb-2">
                You may be featured on the restaurant's Instagram account. 
            </div>
            <div className="w-full text-fontMainColor text-center text-h6 mb-2">
                Do you consent to sharing your username, photos and feedback?
            </div>
            <div className="w-full flex flex-row justify-end items-end">
                <input type="checkbox" onChange={(e) => { 
                    props.setIsAgreed(e.target.checked);
                }}/>
                <div className="w-full text-fontMainColor text-h6 ml-1">YES, continue</div>
            </div>
        </div>
    </>
}



