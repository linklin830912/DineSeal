import CrossIcon from '@/components/svg/cross-icon';
import EmptyIcon from '@/components/svg/empty-icon';
import { MemoryLaneStateEnum, useMemoryLaneState } from '@/context/memory-lane-state-context';
import React from 'react';
export default function MemoryLaneReader() { 
    const {setState} = useMemoryLaneState();
    const handleReaderClose = () => { 
        setState(MemoryLaneStateEnum.BrowseComments);
    }
    return (
        <div className='w-[100%] h-[100%] top-0 left-0 absolute bg-pageBackgroundMaskColor bg-opacity-50 flex flex-col justify-center items-center z-30'>
            <div className='w-[50%] rounded-xl p-5 mb-5 pb-20 bg-white flex flex-col justify-center items-center'>
                
            </div>
            <button onClick={handleReaderClose}><CrossIcon/></button>
            
        </div>        
    );
}