// !COMPONENTE PARA ELIMINAR

import { useQuery } from "@apollo/client"
import { GET_USER_DATA } from "../graphql/GetUserQuery"

export const useProfile = (slug) => {
  const { loading, data } = useQuery(GET_USER_DATA, {
    variables: { slug }
  })

  // const coverPhoto = "https://pbs.twimg.com/profile_banners/4882508632/1673550117/600x200"
  // const photoURL = data?.GetUser.photoURL ? data?.GetUser.photoURL : AvatarUser

  return {
    loading,
    profile: { ...data?.GetUser },
  }
}