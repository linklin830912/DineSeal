import PrevPageArrowButton from '@/components/svg/prev-page-arrow';
import React from 'react';
export default function MemoryLaneHeader() { 
    return (
        <div className='w-full flex flex-row justify-center items-center relative'>
            <div className='absolute left-0'><PrevPageArrowButton /></div>            
            <div className='relative text-h4 md:text-h6 flex justify-center items-center text-fontMainColor'> MEMORY LANE</div>
        </div>
    );
}