import PrevPageArrowButton from '@/components/svg/prev-page-arrow';
import React from 'react';
import LineProcessbar from '@/components/process-bar/line-process-bar';
import { useMemoryLaneState } from '@/context/memory-lane-state-context';
import { useRouter } from 'next/navigation';
import { FiGrid } from "react-icons/fi";

export enum MemoryLaneHeaderStateEnum { 
    MAIN,
    HISTORY
}
type MemoryLaneHeaderProps = {
    title: string,
    state: MemoryLaneHeaderStateEnum
    goBackRoute: string
}
export default function MemoryLaneHeader(props: MemoryLaneHeaderProps) { 
    const { commentings } = useMemoryLaneState();
    const router = useRouter();
    const handleGoToHistory = () => { 
        router?.push('/memory-lane/history');
    }
    const handleGoBack = () => { 
         router?.push(props.goBackRoute);
    }
    return (
        <div className='w-full h-full flex flex-col justify-center items-center px-[10%] md:px-1 z-50'>
            <div className='w-full h-full flex flex-row justify-between items-start relative'>
                <button className='w-[25px] pt-1'
                    onClick={handleGoBack}><PrevPageArrowButton /></button>            
                <div className='text-h4 text-fontColor0 mt-1'>{props.title}</div>
                
                <button className={`w-[20px] ${props.state === MemoryLaneHeaderStateEnum.MAIN ? "" : "opacity-0"}`}
                    onClick={handleGoToHistory}><FiGrid size={20} className='stroke-fontColor0'/></button> 
                             
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <LineProcessbar totalSteps={10} currentStep={(commentings?.length || 0)%10}/>
            </div>
        </div>
    ); 
}