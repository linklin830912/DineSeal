import SegmentSVGPath from '@/components/memory-lane/segment-svg-path';
import StartSVGPath from '@/components/memory-lane/start-svg-path';
import { MemoryLaneStateEnum, useMemoryLaneState } from '@/context/memory-lane-state-context';
import { Commenting } from '@/model/Commenting';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function MemoryLanePath() { 
    const { setState, commentings } = useMemoryLaneState();
    const [filteredCommentings, setFilteredCommentings] = useState<Commenting[]>([]);


    const router = useRouter();
    const handleNavigation = async() => {
        let webcamStream: MediaStream | null = null;
        webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (webcamStream) {
            webcamStream.getTracks().forEach(track => track.stop());
            webcamStream = null;
        }
        
        router?.push('/memory-lane/editor');
    };
    
    useEffect(() => { 
        const comments = commentings ?? [] as Commenting[];
        setFilteredCommentings(comments.filter((x, index)=>((comments.length-1)-(comments.length%10))<index))
    }, [commentings])
    
    return (
    
        <div className='w-fit h-full flex items-center px-[35%]'>
            { filteredCommentings.map((cmmt, index) => <div key={index}>{
                index === 0 ? <StartSVGPath comment={cmmt} hasData
                            index={0}
                            handleButtonClick={() => { }} />
                        : <>{index % 2 === 1 ? 
                            <SegmentSVGPath hasData comment={cmmt} isFlipped
                                index={ index}
                            handleButtonClick={() => {}}/>
                        : <SegmentSVGPath hasData comment={cmmt} isFlipped={false}
                                index={ index}
                            handleButtonClick={() => {}}/>
                    }</>
                }</div>)
            }
            {filteredCommentings && <div> { 
                filteredCommentings?.length === 0 ?
                        <StartSVGPath hasData={false} index={0}
                            handleButtonClick={() => {
                            setState(MemoryLaneStateEnum.EDIT_COMMENT);
                            handleNavigation();
                    }} />
                    : <> {filteredCommentings.length % 2 === 1 ?
                            <SegmentSVGPath hasData={false} isFlipped
                                index={10}
                                handleButtonClick={() => {
                                setState(MemoryLaneStateEnum.EDIT_COMMENT);
                                handleNavigation();
                            }}/>
                            : <SegmentSVGPath hasData={false} isFlipped={false}
                                index={10}
                                handleButtonClick={() => {
                                    setState(MemoryLaneStateEnum.EDIT_COMMENT);
                                    handleNavigation();
                                }}
                                />}
                </>
                }</div>}            
        </div>
    );
}