import { gql } from "@apollo/client";

export const GET_RESTAURANT_THEME_SETTINGS_BY_RESTAURANT_ID = gql`
    query getRestaurantThemeSettingsById($restaurantId: Int = -1) {
  restaurant_theme_settings(where: {restaurant_id: {_eq: $restaurantId}}) {
    restaurant_id
    restaurant_theme_settings_id
    value
  }
}`



