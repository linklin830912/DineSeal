
"use client"
import MapIcon from '@/components/svg/map-icon';
import { MemoryLaneStateEnum, useMemoryLaneState } from '@/context/memory-lane-state-context';
import React, { useState } from 'react';
import CameraEditor from './camera-editor';
import CrossIcon from '@/components/svg/cross-icon';
import CommentingEditor from './commenting-editor';
import { Commenting } from '@/model/Commenting';
import FeedbackEditor from './feedback-editor';
import ConsentEditor from './consent-editor';
import { POST_COMMENTING } from '@/api/comments/postCommentingWithDiaryId';
import { useMutation } from '@apollo/client';
import { uploadImageFromCanvas } from '@/api/image/uploadImage';
import { useRouter } from 'next/navigation';

export enum MemoryLaneEditorStateEnum {
    CAMERA,
    MAKE_COMMENTS,
    MAKE_FEEDBACK,
    SHARE_IN_INSTAGRAM,
    CONSENT_RIGHTS,    
    DONE
}
export type EditorProp = {
    imageTaken?: HTMLCanvasElement,
    newCommenting?: Commenting,
    setNewCommenting?:(commenting: Commenting)=>void
}
export default function MemoryLaneEditor() {
    
    const { restaurant, setState, diaryId, commentings } = useMemoryLaneState();
    const [editorState, setEditorState] = useState<MemoryLaneEditorStateEnum>(MemoryLaneEditorStateEnum.CAMERA);
    const [imageTaken, setImageTaken] = useState<HTMLCanvasElement>();
    const [newCommenting, setNewCommenting] = useState<Commenting>({});
    const [isAgreed, setIsAgreed] = useState<boolean>(false);

    const router = useRouter();

    const handleEditorClose = () => {
        if (setState) setState(MemoryLaneStateEnum.BrowseComments);
        router?.push('/memory-lane');
    }
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Check this out!",
                    text: "Here's something interesting to look at.",
                    url: window.location.href, // You can replace this with any URL
                });
                console.log("Content shared successfully!");
            } catch (error) {
                console.error("Error sharing content:", error);
            }
        } else {
            alert("Sharing is not supported on this device/browser.");
        }
    };
    const [insertCommenting] = useMutation<number, any>(POST_COMMENTING);
    const handleSubmit = async() => { 
        try {
            const imageFileName = `${diaryId}-${(commentings?.length || 0) + 1}`;
            await uploadImageFromCanvas(imageFileName, imageTaken);
            await insertCommenting({
            variables: {
                appreciation: newCommenting.appreciation,
                create_time: new Date().toISOString(), // Properly format the timestamp
                description: newCommenting.description,
                diary_id: diaryId,
                photo_urls: [imageFileName],
                rating: newCommenting.rating || 0,
                tags: newCommenting.tags || [] ,
                title: newCommenting.title,
            }})
        } catch(err) { 
            console.error("Error posting comment:", err);
        }
    }

    return (
        <div className='w-full h-[100vh] relative flex flex-row justify-center items-center bg-gradient-to-b from-mainBackgroundLinear0Color to-mainBackgroundLinear1Color'>
            <div className='w-full h-[100%] top-0 left-0 absolute bg-pageBackgroundMaskColor flex flex-col justify-center items-center z-30'>
            <div className='w-full flex flex-row justify-center items-end mb-2'>
                <MapIcon />
                <div className='text-h4 text-fontSecondary0Color'>
                    {restaurant?.restaurantName.toUpperCase()}
                </div>                
            </div>
                <div className='w-[80%] h-auto rounded-xl p-2 bg-pageBackgroundColor flex flex-col justify-start items-center'>
                    
                {editorState === MemoryLaneEditorStateEnum.CAMERA && <CameraEditor setImageTaken={setImageTaken}
                    setEditorState={setEditorState} />}                         
                {editorState === MemoryLaneEditorStateEnum.MAKE_COMMENTS && imageTaken && <CommentingEditor
                    imageTaken={imageTaken} newCommenting={newCommenting} setNewCommenting={setNewCommenting}/>}
                {editorState === MemoryLaneEditorStateEnum.MAKE_FEEDBACK && <FeedbackEditor
                    imageTaken={imageTaken} newCommenting={newCommenting}setNewCommenting={setNewCommenting} />}
                {editorState === MemoryLaneEditorStateEnum.CONSENT_RIGHTS && <ConsentEditor
                    imageTaken={imageTaken} newCommenting={newCommenting} setNewCommenting={setNewCommenting} setIsAgreed={setIsAgreed} />}
                {editorState === MemoryLaneEditorStateEnum.DONE && <div className='text-fontSecondary1Color'>
                    Thank you. Your feedback is appreciated!
                </div>}
            </div>
            
            
            <div className='w-full mt-5 flex flex-row justify-center items-center'>
                <button onClick={handleEditorClose}><CrossIcon /></button>
                {editorState === MemoryLaneEditorStateEnum.MAKE_COMMENTS &&
                    <>
                        <button className="bg-mainButton1Color rounded-xl ml-5 text-h6 px-5 py-1" onClick={handleShare}>SHARE</button> 
                        <button className='bg-mainButton1Color rounded-xl ml-2 text-h6 px-5 py-1'onClick={() => { 
                            if(newCommenting.title && newCommenting.description)
                                setEditorState(MemoryLaneEditorStateEnum.CONSENT_RIGHTS)
                            }}> SAVE </button>
                        <button className='bg-mainButton1Color rounded-xl ml-2 text-h6 px-5 py-1' onClick={() => { 
                            if(newCommenting.title && newCommenting.description)
                                setEditorState(MemoryLaneEditorStateEnum.MAKE_FEEDBACK)
                            }}> + POINT </button>
                    </>                     
                }
                {editorState === MemoryLaneEditorStateEnum.MAKE_FEEDBACK &&
                    <button className='bg-mainButton1Color rounded-xl ml-5 text-h6 px-5 py-1'
                        onClick={() => { 
                            if(newCommenting.appreciation)
                                setEditorState(MemoryLaneEditorStateEnum.CONSENT_RIGHTS)
                            }}
                    > SAVE </button>
                }
                {editorState === MemoryLaneEditorStateEnum.CONSENT_RIGHTS &&
                    <button className='bg-mainButton1Color rounded-xl ml-5 text-h6 px-5 py-1'
                        onClick={() => { 
                            if(isAgreed)
                                setEditorState(MemoryLaneEditorStateEnum.DONE)
                                handleSubmit();
                            }}
                    > SUBMIT </button>
                }
            </div>
                     
        </div>   
        </div>     
    );
}