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
      linkedin
      github
      portfolio
      bio
      location
    }
  }
`