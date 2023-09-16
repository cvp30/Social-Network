import { useQuery } from "@apollo/client"
import { GET_PROFILE } from "../graphql/GetProfileQuery"
// import AvatarUser from "../assets/defaultUser.png"
import AvatarUser from "../assets/avatar.jpg"

export const useProfile = () => {
  const { client, data, loading } = useQuery(GET_PROFILE)

  return {
    client,
    profile: { ...data?.GetProfile, photoURL: data?.GetProfile.photoURL ?? AvatarUser },
    loading
  }
}