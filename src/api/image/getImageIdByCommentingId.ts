import { gql} from '@apollo/client';

export const GET_IMAGE_ID_BY_COMMENTING_ID = gql`query getImageIdByCommentingId($commenting_id: Int) {
  commenting(where: {commenting_id: {_eq: $commenting_id}}) {
    image_id
  }
}
`