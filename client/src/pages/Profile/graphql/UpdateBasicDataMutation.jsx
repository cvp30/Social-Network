import { gql } from "@apollo/client";

export const UPDATE_PROFILE_DATA = gql`
  mutation UpdateProfileData($input:ProfileData){
    UpdateProfile (input: $input){
      username
      photoURL
      coverPhoto
      portfolio
      github
      linkedin
      bio
      location
    }
  }
`