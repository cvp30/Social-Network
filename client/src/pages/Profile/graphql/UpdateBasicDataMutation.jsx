import { gql } from "@apollo/client";

export const UPDATE_PROFILE_DATA = gql`
  mutation UpdateProfileData($input:ProfileData){
    UpdateProfileData (input: $input){
      username
      website
      bio
      location
    }
  }
`