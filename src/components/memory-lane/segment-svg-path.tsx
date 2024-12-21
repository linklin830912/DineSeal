import { Commenting } from '@/model/Commenting';
import React, { useEffect, useRef } from 'react';
import { StartSVGPathProps } from './start-svg-path';
type SegmentSVGPathProps = {
    isFlipped: boolean
} & StartSVGPathProps;
export default function SegmentSVGPath(props: SegmentSVGPathProps) { 
    const positionRef = useRef<SVGPathElement | null>(null);
    useEffect(() => { 
        const rect = positionRef.current?.getBoundingClientRect();
        console.log(rect?.x)
        props.setPositionX(rect?.x || 0);
    }, [positionRef])
    return (
        <>        
            {props.isFlipped ?
                <div className={`relative h-[100%] ml-[-50px] left-[-60px]`}>
                <svg preserveAspectRatio="xMidYMid slice" height={"300px"} xmlns="http://www.w3.org/2000/svg" viewBox="600 0 470 451.34">
                    <path id="path1" className='stroke-mainSvgPath0Color pointer-events-none' strokeOpacity="0.27" strokeWidth="40" fillOpacity={0}
                        d="M618.38,384.73c83.37.63,167.15-51.09,183.86-155.22C818.84,126,901.78,74.64,984.72,75" />
                    <path id="star1" className="fill-mainSvgPath0Color cursor-pointer" ref={ positionRef }
                        d="M1019.63,10.68a8,8,0,0,1,12.83,6.41l-.15,32.5a8,8,0,0,0,3.44,6.61l26.69,18.55a8,8,0,0,1-2.13,14.19l-31,9.9a8,8,0,0,0-5.23,5.31l-9.39,31.12a8,8,0,0,1-14.16,2.36l-19-26.39a8,8,0,0,0-6.66-3.32l-32.5.68a8,8,0,0,1-6.62-12.74L955,69.65a8,8,0,0,0,1.1-7.36l-10.68-30.7a8,8,0,0,1,10.06-10.23l30.87,10.19a8,8,0,0,0,7.34-1.22Z" />
                        {props.hasData ?
                            <path id="check1" className='stroke-mainSvgPath1Color' strokeWidth={"5"} fillOpacity={0}
                                d="M1020.06,61.5l-27.5,27-12.5-12.27" />
                            : <path id="emtpty1" className='stroke-mainSvgPath1Color' strokeWidth={"5"} fillOpacity={0} transform="translate(-5 0)"
                                d="M991.06,55h-6a4,4,0,0,0-4,4v6m36,0V59a4,4,0,0,0-4-4h-6m0,36h6a4,4,0,0,0,4-4V81m-36,0v6a4,4,0,0,0,4,4h6" />
                        }
                        <rect x={930} y={0} width={150} height={150} className="cursor-pointer" fill='transparent' onClick={props.handleButtonClick}/>
                    </svg>
                    
                </div> : <div className={`relative h-[100%] ml-[-50px] left-[-60px]`}>
                    <svg preserveAspectRatio="xMidYMid slice" height={"300px"} xmlns="http://www.w3.org/2000/svg" viewBox="990 0 475 451.34">
                        <path id="path2" className='stroke-mainSvgPath0Color pointer-events-none' strokeOpacity="0.27" strokeWidth="40" fillOpacity={0}
                            d="M1007.06,73.36c82.94.36,165.88,52.46,182.53,155.94,17.19,107.17,105.36,159.37,191.18,156.21" />
                        <path id="star2" className="fill-mainSvgPath0Color cursor-pointer" ref={ positionRef }
                            d="M1408.63,320.41a8,8,0,0,1,12.83,6.41l-.15,32.51a8,8,0,0,0,3.44,6.61l26.69,18.55a8,8,0,0,1-2.13,14.19l-31,9.9a8,8,0,0,0-5.23,5.31L1403.73,445a8,8,0,0,1-14.16,2.36l-19-26.39a8,8,0,0,0-6.66-3.33l-32.5.68a8,8,0,0,1-6.62-12.73L1344,379.39a8,8,0,0,0,1.1-7.36l-10.68-30.7a8,8,0,0,1,10.06-10.23l30.87,10.19a8,8,0,0,0,7.34-1.22Z" />
                            { props.hasData ? <path id="check2" className='stroke-mainSvgPath1Color' strokeWidth={"5"} fillOpacity={0}
                                d="M1409.06,371.24l-27.5,27L1369.06,386" />
                                : <path id="emtpty2" className='stroke-mainSvgPath1Color' strokeWidth={"5"} fillOpacity={0} transform="translate(-5 0)"
                                    d="M1380.06,364.74h-6a4,4,0,0,0-4,4v6m36,0v-6a4,4,0,0,0-4-4h-6m0,36h6a4,4,0,0,0,4-4v-6m-36,0v6a4,4,0,0,0,4,4h6" />
                        }
                        <rect x={1330} y={300} width={150} height={150} className="cursor-pointer" fill='transparent' onClick={props.handleButtonClick}/>
                    </svg>
            </div>}
            </>
    );
}