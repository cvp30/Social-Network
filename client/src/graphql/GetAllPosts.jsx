import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts{
  GetAllPosts {
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