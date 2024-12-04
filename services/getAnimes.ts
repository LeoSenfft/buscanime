import { gql } from "@apollo/client";

export const GET_ANIMES = gql`
  query Media(
    $perPage: Int
    $search: String
    $sort: [MediaSort]
    $format: MediaFormat
    $page: Int
  ) {
    Page(perPage: $perPage, page: $page) {
      media(search: $search, sort: $sort, format: $format) {
        averageScore
        bannerImage
        coverImage {
          large
          color
        }
        id
        genres
        title {
          userPreferred
        }
      }
    }
  }
`;
