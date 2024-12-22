import { gql} from '@apollo/client';

export const GET_COMMENTS_BY_DIARY_ID = gql`
query getCommentsByDiaryId($diaryId: Int) {
  commenting(where: {diary_id: {_eq: $diaryId}}, order_by: {create_time: asc}) {
    create_time
    description
    image_id
    rating
    tags
    diary_id
    commenting_id
    appreciation
    title
  }
}`

