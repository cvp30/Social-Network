import { gql } from "@apollo/client";


export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!){
    LoginUser(email: $email, password: $password) {
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