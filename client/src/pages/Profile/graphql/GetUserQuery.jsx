import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query GetUserData($slug: String!){
  GetUser(slug: $slug) {
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