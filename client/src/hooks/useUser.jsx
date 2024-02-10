import { useQuery } from "@apollo/client"
import { GET_PROFILE } from "../graphql/GetProfileQuery"

export const useUser = () => {
  const { data, loading } = useQuery(GET_PROFILE)

  return {
    profile: { ...data?.GetProfile },
    loading
  }
}