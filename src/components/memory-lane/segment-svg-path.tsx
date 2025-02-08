import React from 'react';
import { StartSVGPathProps } from './start-svg-path';
import { SVGTypesSettingsEnum } from '@/model/enum/SVGTypesSettingsEnum';
import { useRestaurantThemeSettings } from '@/context/restaurant-theme-settings-context';
type SegmentSVGPathProps = {
    isFlipped: boolean
} & StartSVGPathProps;
export default function SegmentSVGPath(props: SegmentSVGPathProps) { 
    const { restaurantThemeSettings } = useRestaurantThemeSettings();
    return (
        <>        
            {props.isFlipped ?
                <div className={ `ml-[-20px]`} >
                    <svg height={"300px"} xmlns="http://www.w3.org/2000/svg" viewBox="620 0 450 451.34">
                        <path id="path1" className='stroke-svgStrokeColor0' strokeOpacity="0.27" strokeWidth="40" fillOpacity={0}
                            d="M618.38,384.73c83.37.63,167.15-51.09,183.86-155.22C818.84,126,901.78,74.64,984.72,75" />
                        
                        {restaurantThemeSettings.main.svgS === SVGTypesSettingsEnum.CIRCLE &&
                            <circle className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} cx="1000.06" cy="73.52" r="70.72"
                            onClick={props.handleButtonClick}/>
                        }
                        { restaurantThemeSettings.main.svgS === SVGTypesSettingsEnum.STAR_8 &&
                            <path className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} id="star82" transform="translate(0 0.16)" d="M994.91,4.8a7.58,7.58,0,0,1,10.3,0L1020,18.47a7.53,7.53,0,0,0,4.86,2l20.09.76a7.58,7.58,0,0,1,7.28,7.28l.76,20.09a7.53,7.53,0,0,0,2,4.86l13.67,14.74a7.58,7.58,0,0,1,0,10.3L1055,93.25a7.53,7.53,0,0,0-2,4.86l-.76,20.09a7.58,7.58,0,0,1-7.28,7.28l-20.09.76a7.53,7.53,0,0,0-4.86,2l-14.74,13.67a7.58,7.58,0,0,1-10.3,0l-14.74-13.67a7.53,7.53,0,0,0-4.86-2l-20.09-.76a7.58,7.58,0,0,1-7.28-7.28l-.76-20.09a7.53,7.53,0,0,0-2-4.86L931.5,78.51a7.58,7.58,0,0,1,0-10.3l13.67-14.74a7.53,7.53,0,0,0,2-4.86l.76-20.09a7.58,7.58,0,0,1,7.28-7.28l20.09-.76a7.53,7.53,0,0,0,4.86-2Z"
                                onClick={props.handleButtonClick}  />
                        }
                        { restaurantThemeSettings.main.svgS === SVGTypesSettingsEnum.STAR &&
                            <path className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} id="star52" d="M1019.63,10.68a8,8,0,0,1,12.83,6.41l-.15,32.5a8,8,0,0,0,3.44,6.61l26.69,18.55a8,8,0,0,1-2.13,14.19l-31,9.9a8,8,0,0,0-5.23,5.31l-9.39,31.12a8,8,0,0,1-14.16,2.36l-19-26.39a8,8,0,0,0-6.66-3.32l-32.5.68a8,8,0,0,1-6.62-12.74L955,69.65a8,8,0,0,0,1.1-7.36l-10.68-30.7a8,8,0,0,1,10.06-10.23l30.87,10.19a8,8,0,0,0,7.34-1.22Z"
                                transform="translate(0 0.16)"
                                onClick={props.handleButtonClick} />
                        }

                        {props.hasData ?
                                <path id="check1" className='stroke-svgStrokeColor0' strokeWidth={"5"} fillOpacity={0}
                                    d="M1020.06,61.5l-27.5,27-12.5-12.27" />
                                : <path id="emtpty1" className='stroke-svgStrokeColor0' strokeWidth={"5"} fillOpacity={0} transform="translate(-5 0)"
                                    d="M991.06,55h-6a4,4,0,0,0-4,4v6m36,0V59a4,4,0,0,0-4-4h-6m0,36h6a4,4,0,0,0,4-4V81m-36,0v6a4,4,0,0,0,4,4h6"
                                     />
                        }
                    </svg>
                </div>
                : <div className={ `ml-[-20px] z-[${props.index}]`}>
                    <svg height={"300px"} xmlns="http://www.w3.org/2000/svg" viewBox="1010 0 440 451.34" onClick={props.handleButtonClick}>
                        <path id="path2" className='stroke-svgStrokeColor0' strokeOpacity="0.27" strokeWidth="40" fillOpacity={0}
                            d="M1007.06,73.36c82.94.36,165.88,52.46,182.53,155.94,17.19,107.17,105.36,159.37,191.18,156.21" />
                        <g transform='translate(780 0)'>
                        {restaurantThemeSettings.main.svgS === SVGTypesSettingsEnum.CIRCLE && 
                                <circle className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} cx="601.07" cy="381.54" r="70.72"
                                    onClick={props.handleButtonClick} />
                        }
                        { restaurantThemeSettings.main.svgS === SVGTypesSettingsEnum.STAR_8 &&
                                <path className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} id="star81" d="M595.92,315.18a7.56,7.56,0,0,1,10.3,0L621,328.84a7.54,7.54,0,0,0,4.86,2l20.09.76a7.57,7.57,0,0,1,7.28,7.28L654,359a7.55,7.55,0,0,0,2,4.87l13.67,14.74a7.58,7.58,0,0,1,0,10.3L656,403.62a7.55,7.55,0,0,0-2,4.87l-.76,20.08a7.58,7.58,0,0,1-7.28,7.29l-20.09.75a7.54,7.54,0,0,0-4.86,2l-14.74,13.66a7.56,7.56,0,0,1-10.3,0l-14.74-13.66a7.54,7.54,0,0,0-4.86-2l-20.09-.75a7.58,7.58,0,0,1-7.28-7.29l-.76-20.08a7.55,7.55,0,0,0-2-4.87l-13.67-14.73a7.58,7.58,0,0,1,0-10.3l13.67-14.74a7.55,7.55,0,0,0,2-4.87L549,338.9a7.57,7.57,0,0,1,7.28-7.28l20.09-.76a7.54,7.54,0,0,0,4.86-2Z"
                                    onClick={props.handleButtonClick} transform="translate(0 0.16)" />
                        }
                        {restaurantThemeSettings.main.svgS === SVGTypesSettingsEnum.STAR &&
                                <path className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} id="star51" d="M621.64,321.06a8,8,0,0,1,12.84,6.41L634.32,360a8,8,0,0,0,3.44,6.6l26.69,18.56a8,8,0,0,1-2.13,14.19l-31,9.9a8,8,0,0,0-5.22,5.3l-9.4,31.12A8,8,0,0,1,602.59,448l-19-26.38a8,8,0,0,0-6.66-3.33l-32.5.68a8,8,0,0,1-6.62-12.73L557.05,380a8,8,0,0,0,1.11-7.36L547.47,342a8,8,0,0,1,10.06-10.23L588.4,342a8,8,0,0,0,7.35-1.23Z"
                                    onClick={props.handleButtonClick}  transform="translate(0 0.16)" />
                        }
                        { props.hasData ? 
                            <path className='stroke-svgStrokeColor0' strokeWidth="5" strokeOpacity={1} fillOpacity={0}
                                d="M622.07,371.88l-27.5,27-12.5-12.27" transform="translate(0 0.16)" /> 
                                : <path className='stroke-svgStrokeColor0' strokeWidth={"5"} fillOpacity={0}  transform="translate(-5 0)"
                                    d="M593.07,365.38h-6a4,4,0,0,0-4,4v6m36,0v-6a4,4,0,0,0-4-4h-6m0,36h6a4,4,0,0,0,4-4v-6m-36,0v6a4,4,0,0,0,4,4h6"
                                     />
                        }</g>
                     </svg>
                </div>
                    }
            </>
    );
}