import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost($content: String, $image: String,  $privacy: PRIVACY!){
  CreatePost(content: $content, image: $image, privacy: $privacy) {
    id
    content
    createdAt
    image
    likes {
      id
      email
    }
    shares {
      id
      email
    }
    userId {
      email
      slug
    }
    privacy
  }
}
`