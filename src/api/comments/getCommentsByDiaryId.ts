import { mapToCommentings } from '@/mapper/mapToCommentings';
import { Commenting } from '@/model/Commenting';
import { gql, useLazyQuery } from '@apollo/client';
import { useMemo } from 'react';

export const GET_COMMENTS_BY_DIARY_ID = gql`
query getCommentsByDiaryId($diaryId: Int) {
  commenting(where: {diary_id: {_eq: $diaryId}}, order_by: {create_time: asc}) {
    create_time
    description
    photo_urls
    rating
    tags
    diary_id
    commenting_id
    appreciation
    title
  }
}`

