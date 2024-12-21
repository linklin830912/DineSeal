import { Restaurant } from "@/model/Restaurant";

export function mapToRestaurant(data: any){
    let restaurants = [] as Restaurant[];
    
    data.restaurant.forEach((x: any) => {
      restaurants.push(  {
        address: x.restaurant_location,
        restaurantName: x.restaurant_name,
        type: x.type,
        restaurantLink : x.restaurant_link,
        restaurantId: x.restaurant_id,
        menu: x.menu,
        mediaLink: x.media_link,
        gameAvailable: x.game_available,
        dishesImages: x.dishes_image,
    })});
    return restaurants;
};