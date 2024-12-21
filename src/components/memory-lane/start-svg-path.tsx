import { Commenting } from '@/model/Commenting';
import React, { useEffect, useRef } from 'react';
export type StartSVGPathProps = {
    hasData: boolean;
    comment?: Commenting;
    setPositionX: (x:number)=>void;
    handleButtonClick: () => void;
}
export default function StartSVGPath(props: StartSVGPathProps) { 
   const positionRef = useRef<SVGPathElement | null>(null);
    useEffect(() => { 
        const rect = positionRef.current?.getBoundingClientRect();
        console.log(rect?.x)
        props.setPositionX(rect?.x || 0);
    }, [positionRef])
    return (
        <div className={`h-full relative left-[-60px]`}>
            <svg preserveAspectRatio="xMidYMid slice" height={"300px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 667.89 451.34">
                <path id="path0" className='stroke-mainSvgPath0Color'
                    strokeOpacity="0.27" strokeWidth="40" strokeLinecap="round" fillOpacity={0}
                    d="M124.4,165.65c41.78-2.22,122.35,0,160.06,0,64.44,0,100.44,0,121,58.22,16.36,103,98.44,154.88,180.91,155.51" />
                <path id="star80" className="fill-mainSvgPath1Color"
                    d="M96.92,52.58a11,11,0,0,1,15,0l21.4,19.84a11,11,0,0,0,7.06,2.93l29.17,1.1A11,11,0,0,1,180.09,87l1.1,29.16a11,11,0,0,0,2.93,7.07L204,144.66a11,11,0,0,1,0,15L184.12,181a11,11,0,0,0-2.93,7.07l-1.1,29.16a11,11,0,0,1-10.58,10.58l-29.17,1.1a11,11,0,0,0-7.06,2.93l-21.4,19.84a11,11,0,0,1-15,0l-21.4-19.84a11,11,0,0,0-7.07-2.93l-29.16-1.1a11,11,0,0,1-10.58-10.58l-1.1-29.16A11,11,0,0,0,24.68,181L4.84,159.62a11,11,0,0,1,0-15l19.84-21.4a11,11,0,0,0,2.93-7.07L28.71,87A11,11,0,0,1,39.29,76.45l29.16-1.1a11,11,0,0,0,7.07-2.93Z" />
                
                <path id="star0" className="fill-mainSvgPath0Color cursor-pointer"  onClick={props.handleButtonClick} ref={ positionRef}
                    d="M621.64,321.06a8,8,0,0,1,12.84,6.41L634.32,360a8,8,0,0,0,3.44,6.6l26.69,18.56a8,8,0,0,1-2.13,14.19l-31,9.9a8,8,0,0,0-5.22,5.3l-9.4,31.12A8,8,0,0,1,602.59,448l-19-26.38a8,8,0,0,0-6.66-3.33l-32.5.68a8,8,0,0,1-6.62-12.73L557.05,380a8,8,0,0,0,1.11-7.36L547.47,342a8,8,0,0,1,10.06-10.23l30.87,10.19a8,8,0,0,0,7.35-1.23Z" />
                
                {props.hasData ?
                    <path id="check0" className='stroke-mainSvgPath1Color' strokeWidth={"5"} fillOpacity={0}
                        d="M622.07,371.88l-27.5,27-12.5-12.27" />
                            : <path id="emtpty0" className='stroke-mainSvgPath1Color' strokeWidth={"5"} fillOpacity={0}  transform="translate(-5 0)"
                                d="M593.07,365.38h-6a4,4,0,0,0-4,4v6m36,0v-6a4,4,0,0,0-4-4h-6m0,36h6a4,4,0,0,0,4-4v-6m-36,0v6a4,4,0,0,0,4,4h6" />}                
                <text className="fill-fontMainColor text-h2 font-semibold" transform="translate(65 167)">STOP</text>
            </svg>
        </div>
    );
}