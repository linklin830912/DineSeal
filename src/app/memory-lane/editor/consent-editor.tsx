import React, { useEffect, useRef, useState } from "react";
import { EditorProp } from "./memory-lane-editor";
import { useRestaurantThemeSettings } from "@/context/restaurant-theme-settings-context";
type ConsentEditorProps = EditorProp & {setIsAgreed: (x:boolean)=>void};
export default function ConsentEditor(props: ConsentEditorProps) {
    const { restaurantThemeSettings } = useRestaurantThemeSettings();

    return <div className="flex flex-col w-full p-3 bg-backgroundColor2">
        {restaurantThemeSettings.editor.haveNotice && <div className="w-full bg-buttonColor1 text-fontColor0 text-center text-h6 rounded-lg px-5 py-2 mb-2">
            {restaurantThemeSettings.editor.noticeLabel}
        </div>}
        {restaurantThemeSettings.editor.haveConsentQuestion && <>
            <div className="w-full text-fontColor1 text-center text-h6 mb-2">
                {restaurantThemeSettings.editor.consentQuestionLabel}
            </div>
            <div className="w-full flex flex-row justify-end items-end">
                <input type="checkbox" onChange={(e) => {
                    props.setIsAgreed(e.target.checked);
                }} />
                <div className="w-full text-fontColor1 text-h6 ml-1">{restaurantThemeSettings.editor.consentQuestionAgreeLabel}</div>
            </div>
        </>}
    </div>;
}



