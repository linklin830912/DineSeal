import { gql } from "@apollo/client"
export const POST_COMMENTING = gql`
mutation insertCommenting($appreciation: String = "", $create_time: timestamptz = "", $description: String!, $diary_id: Int!, $rating: Int = 0, $tags: [Int!], $title: String!) {
  insert_commenting(objects: {appreciation: $appreciation, create_time: $create_time, description: $description, diary_id: $diary_id, rating: $rating, tags: $tags, title: $title}) {
    returning {
      appreciation
      commenting_id
      create_time
      description
      diary_id
      image_id
      rating
      tags
      title
    }
  }
}
`;

