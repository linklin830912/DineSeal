import SegmentSVGPath from '@/components/memory-lane/segment-svg-path';
import StartSVGPath from '@/components/memory-lane/start-svg-path';
import { MemoryLaneStateEnum, useMemoryLaneState } from '@/context/memory-lane-state-context';
import { useTouchScreen } from '@/context/touch-screen-context';
import { Commenting } from '@/model/Commenting';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type MemoryLanePathProps = {
    
}
export default function MemoryLanePath(props: MemoryLanePathProps) { 
    const { setState, commentings } = useMemoryLaneState();
    const { positionXs, setPositionXs } = useTouchScreen();
    const [filteredCommentings, setFilteredCommentings] = useState<Commenting[]>([]);

    const handleSetPositionXs = (value:number) => { 
        const newPositionXs = [...positionXs, value];
        setPositionXs(newPositionXs);
    }


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
    },[commentings])



    return (
        <div className='w-full h-full'>
            <div className='flex flex-row h-full flex-nowrap relative items-center px-[50%]' >             
            { filteredCommentings.map((cmmt, index) => <div key={index}>{
                index === 0 ? <StartSVGPath comment={cmmt} hasData
                            setPositionX={handleSetPositionXs}
                            handleButtonClick={() => { 
                                setState(MemoryLaneStateEnum.ReadComment);

                        }} />
                        : <>{index % 2 === 1 ? 
                            <SegmentSVGPath hasData comment={cmmt} isFlipped
                                setPositionX={handleSetPositionXs}
                                handleButtonClick={() => {
                                    setState(MemoryLaneStateEnum.ReadComment);
                            }}/>
                        : <SegmentSVGPath hasData comment={cmmt} isFlipped={false}
                                setPositionX={handleSetPositionXs}
                                handleButtonClick={() => { 
                                setState(MemoryLaneStateEnum.ReadComment);
                                }}/>
                    }</>
                }</div>)
            }
            {filteredCommentings && <div className="mr-[-120px]"> { 
                filteredCommentings?.length === 0 ?
                    <StartSVGPath hasData={false}
                        setPositionX={handleSetPositionXs}
                        handleButtonClick={() => { 
                            setState(MemoryLaneStateEnum.EditComment);
                            handleNavigation();
                    }} />
                    : <> {filteredCommentings.length % 2 === 1 ?
                        <SegmentSVGPath hasData={false} isFlipped
                            setPositionX={handleSetPositionXs}
                            handleButtonClick={() => { 
                                setState(MemoryLaneStateEnum.EditComment);
                                handleNavigation();
                        }}/>
                            : <SegmentSVGPath hasData={false} isFlipped={false}
                            setPositionX={handleSetPositionXs}
                            handleButtonClick={() => { 
                                setState(MemoryLaneStateEnum.EditComment);
                                handleNavigation();
                            }}
                        />}
                </>
                }</div>}
                
            </div>
        </div>
    );
}