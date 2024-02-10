import { gql } from "@apollo/client";


export const GET_FOLLOWING_USERS = gql`
  query GetFollowingList {
    GetFollowingList {
      id
      username
      bio
      photoURL
      github
      linkedin
      portfolio
    }
  }
` 