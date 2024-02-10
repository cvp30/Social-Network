import { gql } from "@apollo/client";


export const GET_ALL_USERS = gql`
  query GetAllUsers{
    GetAllUsers {
      id
      email
      username
      bio
      photoURL
      coverPhoto
      github
      linkedin
      portfolio
      location
      slug
    }
  }
`