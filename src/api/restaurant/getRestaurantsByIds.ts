import { gql } from '@apollo/client';

export const GET_RESTAURANTS_BY_IDS = gql`
query getRestaurantsByIds($restaurantIds: [Int!]) {
  restaurant(where: {restaurant_id: {_in: $restaurantIds}}) {
    restaurant_location
    restaurant_name
    restaurant_type
    restaurant_link
    restaurant_id
    menu
    media_link
    game_available
    dishes_images
  }
}`
