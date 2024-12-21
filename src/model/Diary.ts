import { Commenting } from "./Commenting";
import { CustomerSettings } from "./CustomerSettings";

export type Diary = { // it corresponds to the customer table
    diaryId: number;
    restaurantId: number;
    themeSetting: number;
}