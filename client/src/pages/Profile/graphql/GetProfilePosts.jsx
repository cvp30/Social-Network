import { gql } from "@apollo/client";

export const GET_PROFILE_POSTS = gql`
  query GetPostsFromUser($slug: String!){
    GetPostsFromUser(slug: $slug) {
    id
    content
    image
    privacy
    createdAt
    likes {
      id
    }
    shares {
      id
      email
    }
    userId {
      id
      username
    }
  }
}
`