import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser($email: String!, $username: String!, $password: String!){
    RegisterUser(email: $email, username: $username, password: $password) {
      token
      user {
        id
        email
        photoURL
        slug
        username
      }
    }
  }
`