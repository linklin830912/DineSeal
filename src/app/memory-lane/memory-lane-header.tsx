import MenuIcon from '@/components/svg/menu-icon';
import PrevPageArrowButton from '@/components/svg/prev-page-arrow';
import React from 'react';
import LineProcessbar from '@/components/process-bar/line-process-bar';
import { useMemoryLaneState } from '@/context/memory-lane-state-context';
export default function MemoryLaneHeader() { 
    const { commentings } = useMemoryLaneState();
    return (
        <div className='w-full flex flex-col justify-center items-start relative px-[10%] md:px-1'>
            <div className='w-full flex flex-row justify-between items-start relative'>
                <div className='w-[30px]'><PrevPageArrowButton /></div>            
                <div className='text-h4 text-fontMainColor mt-1'> MEMORY LANE</div>
                <div className='w-[20px]'><MenuIcon/></div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <LineProcessbar totalSteps={10} currentStep={commentings?.length || 0}/>
            </div>
        </div>
    ); 
}