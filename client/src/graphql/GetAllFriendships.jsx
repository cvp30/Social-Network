import { gql } from "@apollo/client";

export const GET_ALL_FRIENDSHIPS = gql`
query GetFriendships{
  GetUserFriendships {
    _id
    username
    bio
    photoURL
    status
    slug
  }
}
`