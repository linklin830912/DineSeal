import { useRestaurantThemeSettings } from '@/context/restaurant-theme-settings-context';
import { Commenting } from '@/model/Commenting';
import { switchToFontSize } from '@/model/enum/FontsSizeSettingsEnum';
import { SVGTypesSettingsEnum } from '@/model/enum/SVGTypesSettingsEnum';
import React from 'react';
export type StartSVGPathProps = {
    index: number;
    hasData: boolean;
    comment?: Commenting;
    handleButtonClick: () => void;
}
export default function StartSVGPath(props: StartSVGPathProps) {
    const { restaurantThemeSettings } = useRestaurantThemeSettings();
    return (
        <div className={ `z-[${props.index}]`}>
        <svg viewBox="0 0 670 454.47" height={"300px"} fill="none" strokeLinecap="round">
            <path className='stroke-svgStrokeColor0' strokeWidth="40" strokeOpacity={0.27} fillOpacity={0} d="M124.4,165.65c41.78-2.22,122.35,0,160.06,0,64.44,0,100.44,0,121,58.22,16.36,103,98.44,154.88,180.91,155.51" transform="translate(0 0.16)"/>
            {restaurantThemeSettings.main.svgL === SVGTypesSettingsEnum.CIRCLE &&
                <circle className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} cx="104.42" cy="150.37" r="102.7" />}
            {restaurantThemeSettings.main.svgL === SVGTypesSettingsEnum.STAR &&
                <path className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} id="star50" d="M135.7,66.25a11.56,11.56,0,0,1,18.55,9.27l-.22,47a11.56,11.56,0,0,0,5,9.55l38.58,26.82a11.56,11.56,0,0,1-3.08,20.5l-44.75,14.31a11.58,11.58,0,0,0-7.55,7.67l-13.58,45a11.56,11.56,0,0,1-20.45,3.41L80.72,211.59a11.55,11.55,0,0,0-9.62-4.81l-47,1a11.57,11.57,0,0,1-9.57-18.4l27.8-37.87A11.57,11.57,0,0,0,44,140.85L28.51,96.48A11.56,11.56,0,0,1,43.05,81.7L87.66,96.42a11.54,11.54,0,0,0,10.61-1.77Z" transform="translate(0 0.16)"/>
            }
            {restaurantThemeSettings.main.svgL === SVGTypesSettingsEnum.STAR_8 &&
                <path className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} id="star80" d="M96.92,52.58a11,11,0,0,1,15,0l21.4,19.84a11,11,0,0,0,7.06,2.93l29.17,1.1A11,11,0,0,1,180.09,87l1.1,29.16a11,11,0,0,0,2.93,7.07L204,144.66a11,11,0,0,1,0,15L184.12,181a11,11,0,0,0-2.93,7.07l-1.1,29.16a11,11,0,0,1-10.58,10.58l-29.17,1.1a11,11,0,0,0-7.06,2.93l-21.4,19.84a11,11,0,0,1-15,0l-21.4-19.84a11,11,0,0,0-7.07-2.93l-29.16-1.1a11,11,0,0,1-10.58-10.58l-1.1-29.16A11,11,0,0,0,24.68,181L4.84,159.62a11,11,0,0,1,0-15l19.84-21.4a11,11,0,0,0,2.93-7.07L28.71,87A11,11,0,0,1,39.29,76.45l29.16-1.1a11,11,0,0,0,7.07-2.93Z" transform="translate(0 0.16)"/>
            }
            <text className='fill-svgStrokeColor0' strokeOpacity={0} fillOpacity={1} textAnchor="middle"
                fontSize={switchToFontSize(restaurantThemeSettings.main.fontSize).fontSize2} fontWeight="bold"
                dominantBaseline="middle" transform="translate(105 158)">{restaurantThemeSettings.main.startText}</text>
            
            {restaurantThemeSettings.main.svgS === SVGTypesSettingsEnum.CIRCLE &&
                <circle className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} cx="601.07" cy="381.54" r="70.72" />
            }
            { restaurantThemeSettings.main.svgS === SVGTypesSettingsEnum.STAR_8 &&
                <path className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} id="star81" d="M595.92,315.18a7.56,7.56,0,0,1,10.3,0L621,328.84a7.54,7.54,0,0,0,4.86,2l20.09.76a7.57,7.57,0,0,1,7.28,7.28L654,359a7.55,7.55,0,0,0,2,4.87l13.67,14.74a7.58,7.58,0,0,1,0,10.3L656,403.62a7.55,7.55,0,0,0-2,4.87l-.76,20.08a7.58,7.58,0,0,1-7.28,7.29l-20.09.75a7.54,7.54,0,0,0-4.86,2l-14.74,13.66a7.56,7.56,0,0,1-10.3,0l-14.74-13.66a7.54,7.54,0,0,0-4.86-2l-20.09-.75a7.58,7.58,0,0,1-7.28-7.29l-.76-20.08a7.55,7.55,0,0,0-2-4.87l-13.67-14.73a7.58,7.58,0,0,1,0-10.3l13.67-14.74a7.55,7.55,0,0,0,2-4.87L549,338.9a7.57,7.57,0,0,1,7.28-7.28l20.09-.76a7.54,7.54,0,0,0,4.86-2Z" transform="translate(0 0.16)"/>
            }
            {restaurantThemeSettings.main.svgS === SVGTypesSettingsEnum.STAR &&
                <path className='fill-svgFillColor1' strokeOpacity={0} fillOpacity={1} id="star51" d="M621.64,321.06a8,8,0,0,1,12.84,6.41L634.32,360a8,8,0,0,0,3.44,6.6l26.69,18.56a8,8,0,0,1-2.13,14.19l-31,9.9a8,8,0,0,0-5.22,5.3l-9.4,31.12A8,8,0,0,1,602.59,448l-19-26.38a8,8,0,0,0-6.66-3.33l-32.5.68a8,8,0,0,1-6.62-12.73L557.05,380a8,8,0,0,0,1.11-7.36L547.47,342a8,8,0,0,1,10.06-10.23L588.4,342a8,8,0,0,0,7.35-1.23Z" transform="translate(0 0.16)"/>
            }
            { props.hasData ? 
                <path className='stroke-svgStrokeColor0' strokeWidth="5" strokeOpacity={1} fillOpacity={0}
                    d="M622.07,371.88l-27.5,27-12.5-12.27" transform="translate(0 0.16)" /> 
                    : <path className='stroke-svgStrokeColor0' strokeWidth={"5"} fillOpacity={0}  transform="translate(-5 0)"
                        d="M593.07,365.38h-6a4,4,0,0,0-4,4v6m36,0v-6a4,4,0,0,0-4-4h-6m0,36h6a4,4,0,0,0,4-4v-6m-36,0v6a4,4,0,0,0,4,4h6"
                        onClick={props.handleButtonClick} />
            }
            </svg>
        </div>
    );
}