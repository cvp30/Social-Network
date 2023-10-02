import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query GetProfile{
    GetProfile {
      id
      email
      slug
      username
      photoURL
      coverPhoto
      website
      bio
      location
    }
  }
`