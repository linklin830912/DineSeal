import { Diary } from '@/model/Diary';
import { User } from '@/model/User';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useEffect, useMemo } from 'react';
import { GET_RESTAURANTS_BY_IDS } from '../restaurant/getRestaurantsByIds';
import { mapToDiarys } from '@/mapper/mapToDiarys';
import { mapToUser } from '@/mapper/mapToUser';
import { mapToRestaurant } from '@/mapper/mapToRestaurant';
import { Restaurant } from '@/model/Restaurant';

export const GET_DIARY_USER_ID_BY_EMAIL = gql`
query getDiaryUserIdByEmail($email: bpchar!) {
  users(where: {role_id: {_eq: 3}, email: {_eq: $email}}) {
    email
    user_name
    id
    address
    age
    gender
    last_seen
  }
}`

const GET_DIARY_BY_USER_UUID = gql`
query getDiaryByUserId($userUuid: uuid = "") {
  diary(where: {is: {id: {_eq: $userUuid}}}) {
    diary_id
    theme_setting
    restaurant_id
  }
}`

export function getDiarysAndRestaurantByEmail(email: string) { 
  
  const { data: userData } = useQuery(GET_DIARY_USER_ID_BY_EMAIL, {
        variables: {
            email: email
        }
  });

  const [fetchDiary, { data: diaryData }] =
    useLazyQuery(GET_DIARY_BY_USER_UUID);
  
  const [fetchRestaurants, { data: restaurantsData }] =
    useLazyQuery(GET_RESTAURANTS_BY_IDS);

  useEffect(() => {
    if (userData) { 
      
      const user = mapToUser(userData) as User;
      fetchDiary({variables: {
            userUuid: user.userId
        }})
    }
  }, [userData])

  const diarys = useMemo<Diary[] | undefined>(() => {
    if (diaryData) {
      const diarys = mapToDiarys(diaryData) as Diary[];
      const restaurantIds = diarys.map(x => x.restaurantId);      
      fetchRestaurants({
        variables: {
          restaurantIds: restaurantIds
        }
      });
      return diarys;
    }
  }, [diaryData])

  const restaurants = useMemo<Restaurant[] | undefined>(() => {
    if (restaurantsData) { 
      return mapToRestaurant(restaurantsData) as Restaurant[];
    }
   },[restaurantsData])

  return {diarys: diarys , restaurants: restaurants};
} 
