import React from 'react';
type LineProcessbarProps = {
    totalSteps: number
    currentStep: number
}
export default function LineProcessbar(props: LineProcessbarProps) { 
    return (
        <div className='w-full'>
           <svg width="100%" height="36" viewBox="0 0 361 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="8" width="341" height="16" rx="6" fill="#4867C1" />
                { 

                }
                <rect x="10" y="8" width="341" height="16" rx="6" fill="white"/>
            </svg>
        </div>
        
    );
}