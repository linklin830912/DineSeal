
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
import { mapToCommenting } from '@/mapper/mapToCommentings';
import ThankyouNote from '@/components/svg/thankyou-note';
import { RxCross2 } from 'react-icons/rx';

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
    setNewCommenting?:(commenting: Commenting | undefined)=>void
}
export default function MemoryLaneEditor() {
    
    const { restaurant, setState, diaryId, setCommentings, commentings } = useMemoryLaneState();
    const [editorState, setEditorState] = useState<MemoryLaneEditorStateEnum>(MemoryLaneEditorStateEnum.CAMERA);
    const [imageTaken, setImageTaken] = useState<HTMLCanvasElement>();
    const [newCommenting, setNewCommenting] = useState<Commenting | undefined>();
    const [isAgreed, setIsAgreed] = useState<boolean>(false);
    
    const router = useRouter();

    const handleEditorClose = () => {
        if (setState) setState(MemoryLaneStateEnum.BROWSE_COMMENTS);
        router?.push('/memory-lane');
    }
  
    const [insertCommenting] = useMutation<any, any>(POST_COMMENTING);

    const handleSubmit = async() => { 
        try {
            if (diaryId < 0) return;
            const result = await insertCommenting({
            variables: {
                appreciation: newCommenting?.appreciation,
                create_time: new Date().toISOString(),
                description: newCommenting?.description,
                diary_id: diaryId,
                rating: newCommenting?.rating || 0,
                tags: newCommenting?.tags || [] ,
                title: newCommenting?.title,
                }
            })
            const resultComment = result.data?.insert_commenting.returning[0];
            if (resultComment?.image_id && imageTaken) {
                uploadImageFromCanvas(`${resultComment?.image_id}.png`, imageTaken);
                setCommentings([...commentings || [], mapToCommenting(resultComment)])
            }
            
        } catch(err) { 
            console.error("Error posting comment:", err);
        }
    }

    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center bg-gradient-to-b from-backgroundColor0 to-backgroundColor1'>
                {editorState === MemoryLaneEditorStateEnum.DONE && (commentings?.length || 0) > 0 && (commentings?.length || 0) % 10 === 0
                    && <div className='w-[70%]'> <ThankyouNote /></div>}
                <div className='w-full h-full flex flex-row justify-center items-end mb-2'>
                    <MapIcon />
                    <div className='text-h4 text-fontColor0'>
                        {restaurant?.restaurantName.toUpperCase()}
                    </div>                
                </div>
            
                <div className='w-4/5 h-fit rounded-xl bg-backgroundColor0 border-4 border-fontColor0 flex flex-col'>                    
                    {editorState === MemoryLaneEditorStateEnum.CAMERA && <CameraEditor setImageTaken={setImageTaken}
                        setEditorState={setEditorState} />}                         
                    {editorState === MemoryLaneEditorStateEnum.MAKE_COMMENTS && imageTaken && <CommentingEditor
                        imageTaken={imageTaken} newCommenting={newCommenting} setNewCommenting={setNewCommenting}/>}
                    {editorState === MemoryLaneEditorStateEnum.MAKE_FEEDBACK && <FeedbackEditor
                        imageTaken={imageTaken} newCommenting={newCommenting}setNewCommenting={setNewCommenting} />}
                    {editorState === MemoryLaneEditorStateEnum.CONSENT_RIGHTS && <ConsentEditor
                        imageTaken={imageTaken} newCommenting={newCommenting} setNewCommenting={setNewCommenting} setIsAgreed={setIsAgreed} />}
                    {editorState === MemoryLaneEditorStateEnum.DONE && <div className='bg-backgroundColor2 text-fontColor1 text-h6 text-center p-3'>
                        <div>Thank you. Your feedback is appreciated!</div>
                        { newCommenting?.appreciation && <div>You just earned one extra point.</div>}
                    </div>}
                </div>            
                
                <div className='w-full h-full mt-3 flex flex-row justify-center items-start'>
                    <button onClick={handleEditorClose}><RxCross2 size={30} strokeWidth={"1px"} className='fill-fontColor0 stroke-fontColor0'/></button>
                    {editorState === MemoryLaneEditorStateEnum.MAKE_COMMENTS &&
                        <>
                            <button className='bg-buttonColor0 text-fontColor0 rounded-xl ml-2 text-h6 px-2 py-1'onClick={() => { 
                                if(newCommenting?.title && newCommenting?.description)
                                    setEditorState(MemoryLaneEditorStateEnum.CONSENT_RIGHTS)
                                }}> SAVE </button>
                            <button className='bg-buttonColor1 text-fontColor0 rounded-xl ml-2 text-h6 px-2 py-1' onClick={() => { 
                                if(newCommenting?.title && newCommenting?.description)
                                    setEditorState(MemoryLaneEditorStateEnum.MAKE_FEEDBACK)
                                }}> ADD APPRECIATION </button>
                        </>                     
                    }
                    {editorState === MemoryLaneEditorStateEnum.MAKE_FEEDBACK &&
                        <button className='bg-buttonColor0 rounded-xl ml-5 text-h6 px-5 py-1'
                            onClick={() => { 
                                if(newCommenting?.appreciation)
                                    setEditorState(MemoryLaneEditorStateEnum.CONSENT_RIGHTS)
                                }}
                        > SAVE </button>
                    }
                    {editorState === MemoryLaneEditorStateEnum.CONSENT_RIGHTS &&
                        <button className='bg-buttonColor0 rounded-xl ml-5 text-h6 px-5 py-1'
                            onClick={() => { 
                                if(isAgreed)
                                    setEditorState(MemoryLaneEditorStateEnum.DONE)
                                    handleSubmit();
                                }}
                        > SUBMIT </button>
                    }
                </div>                     
        </div>     
    );
}