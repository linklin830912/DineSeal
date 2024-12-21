import { Commenting } from "@/model/Commenting";
import { gql } from "@apollo/client"
export const POST_COMMENTING = gql`
  mutation postCommenting($appreciation: String = "", $create_time: timestamptz = "", $description: String = "", $diary_id: Int = 10, $photo_urls: [String!] = "", $rating: Int = 10, $tags: [Int!] = 10, $title: String = "") {
    insert_commenting(objects: {appreciation: $appreciation, create_time: $create_time, description: $description, diary_id: $diary_id, photo_urls: $photo_urls, rating: $rating, tags: $tags, title: $title}) {
      returning {
        commenting_id
      }
    }
}`;

