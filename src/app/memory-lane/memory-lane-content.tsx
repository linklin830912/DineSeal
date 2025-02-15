"use client"
import { useMemoryLaneState } from '@/context/memory-lane-state-context';
import MemoryLanePath from './memory-lane-path';
import MemoryLaneHeader, { MemoryLaneHeaderStateEnum } from './memory-lane-header';
import { useEffect } from 'react';
import MemoryLaneCount from './memory-lane-count';
import { useLazyQuery} from '@apollo/client';
import { getDiarysAndRestaurantByEmail} from '@/api/user/getDiarysAndRestaurantByEmail';
import { GET_COMMENTS_BY_DIARY_ID } from '@/api/comments/getCommentsByDiaryId';
import { mapToCommentings } from '@/mapper/mapToCommentings';
import { GET_RESTAURANT_THEME_SETTINGS_BY_RESTAURANT_ID } from '@/api/restaurant-theme-settings/getRestaurantTemeSettings';
import { useRestaurantThemeSettings } from '@/context/restaurant-theme-settings-context';
import { mapToRestaurantThemeSettings } from '@/mapper/mapToRestaurantThemeSettings';
export default function MemoryLaneContent() { 
    const { setCommentings, setRestaurant, setDiaryId, restaurant } = useMemoryLaneState();
    const { setRestaurantThemeSettings} = useRestaurantThemeSettings();

    const { diarys, restaurants } = getDiarysAndRestaurantByEmail("test.user@mail.com");

    const [fetchCommentings, { data: commentingData }] = useLazyQuery(GET_COMMENTS_BY_DIARY_ID, {fetchPolicy: 'cache-first'});
    const [fetchRestaurantThemeSettings, {data: restaurantThemeSettingsData}] = useLazyQuery(GET_RESTAURANT_THEME_SETTINGS_BY_RESTAURANT_ID, {fetchPolicy: 'cache-first'});

    const handleRestaurantIdSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const diaryId = diarys?.filter(x => x.restaurantId === Number(e.target.value)).map(x => x.diaryId)[0];
        const selectedRestaurant = restaurants?.filter(x => x.restaurantId === Number(e.target.value))[0];
        setRestaurant(selectedRestaurant);
        if (diaryId) {
            setDiaryId(diaryId);
            fetchCommentings({ variables:{ diaryId: diaryId } });
        }
        if (selectedRestaurant) {
            console.log(selectedRestaurant.restaurantId)
            fetchRestaurantThemeSettings({ variables:{restaurantId: selectedRestaurant.restaurantId}})
        }
    }

    useEffect(() => { 
        if (commentingData) {
            const newCommentings = mapToCommentings(commentingData);
            setCommentings(newCommentings);
        }
    }, [commentingData])
    useEffect(() => {
        if (restaurantThemeSettingsData) {
            const settings = mapToRestaurantThemeSettings(restaurantThemeSettingsData);
            setRestaurantThemeSettings(settings);
        }
    }, [restaurantThemeSettingsData])

    return (
        <div className='w-full h-[100vh]'>
            <div className='w-full h-full flex flex-col py-5'>
                <div className='w-full h-1/6'>
                    <MemoryLaneHeader title='MEMORY LANE' state={MemoryLaneHeaderStateEnum.MAIN} goBackRoute='/' />
                </div>
                <div className='w-full h-5/6 overflow-x-scroll'>
                    <MemoryLanePath />
                </div>                
                <div className='w-full h-1/6'>
                    <MemoryLaneCount />                
                </div> 
            </div>

            <div className='absolute top-0 left-0 z-20'>
                {restaurants && <div className='w-full flex justify-center items-center z-100'>
                    <select onChange={handleRestaurantIdSelect} defaultValue={restaurant?.restaurantId}>
                        {restaurants.map((x, index) => (
                            <option key={index} value={x.restaurantId}>{x.restaurantName}</option>
                        ))}
                    </select>
                </div>}
            </div>
            
        </div>
    );
}