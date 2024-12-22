import { gql } from "@apollo/client"
export const POST_COMMENTING = gql`
  mutation postCommenting($appreciation: String = "", $create_time: timestamptz = "", $description: String = "", $diary_id: Int = 10, $rating: Int = 10, $tags: [Int!] = 10, $title: String = "") {
    insert_commenting(objects: {appreciation: $appreciation, create_time: $create_time, description: $description, diary_id: $diary_id, rating: $rating, tags: $tags, title: $title}) {
      returning {
        commenting_id
      }
    }
}`;

