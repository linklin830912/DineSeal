"use client"
import { useMemoryLaneState } from '@/context/memory-lane-state-context';
import MemoryLanePath from './memory-lane-path';
import MemoryLaneHeader, { MemoryLaneHeaderStateEnum } from './memory-lane-header';
import { useEffect, useRef } from 'react';
import MemoryLaneCount from './memory-lane-count';
import { useLazyQuery} from '@apollo/client';
import { getDiarysAndRestaurantByEmail} from '@/api/user/getDiarysAndRestaurantByEmail';
import { GET_COMMENTS_BY_DIARY_ID } from '@/api/comments/getCommentsByDiaryId';
import { mapToCommentings } from '@/mapper/mapToCommentings';
export default function MemoryLaneContent() { 
    const { setCommentings, setRestaurant, setDiaryId, restaurant } = useMemoryLaneState();
    const touchscreenRef = useRef<HTMLDivElement>(null);

    const { diarys, restaurants } = getDiarysAndRestaurantByEmail("link.customer0@mail.com");

    const [fetchCommentings, { data: commentingData }] = useLazyQuery(GET_COMMENTS_BY_DIARY_ID);
    const handleRestaurantIdSelect = (e: React.ChangeEvent<HTMLSelectElement>) => { 
        const diaryId = diarys?.filter(x => x.restaurantId === Number(e.target.value)).map(x => x.diaryId)[0];
        const selectedRestaurant = restaurants?.filter(x => x.restaurantId === Number(e.target.value))[0];
        setRestaurant(selectedRestaurant);
        if (diaryId) {
            setDiaryId(diaryId);
            fetchCommentings({ variables: { diaryId: diaryId } });
        }
    }
    useEffect(() => { 
        if (commentingData) {
            const newCommentings = mapToCommentings(commentingData);
            setCommentings(newCommentings);
        }
    }, [commentingData])

    return (
        <div className='w-full h-[100vh] relative flex flex-row justify-center items-center bg-gradient-to-b from-mainBackgroundLinear0Color to-mainBackgroundLinear1Color'>
            <div className='w-full h-full top-0 left-0 absolute grid grid-flow-row grid-rows-[auto_1fr_auto] py-5'>                        
                <div className='w-[100vw]'>
                    <div className='w-full h-auto'>
                        <MemoryLaneHeader title='MEMORY LANE' state={MemoryLaneHeaderStateEnum.MAIN} goBackRoute='/'/>
                    </div>
                </div>   
                <div></div>
                <div className='w-full flex justify-center items-center mt-5'>
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
        
            <div className='w-full h-full overflow-x-auto flex items-center z-10' ref={ touchscreenRef }>
                <MemoryLanePath />
            </div>
        </div>
    );
}