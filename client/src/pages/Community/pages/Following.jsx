import { useQuery } from "@apollo/client"
import { GET_FOLLOWING_USERS } from "../graphql/GetFollowingUsers"

const Following = () => {

  const { data, loading } = useQuery(GET_FOLLOWING_USERS)
  console.log(data)

  if (loading) return <h1>LOADING</h1>
  return (
    <>
      asd
    </>
  )
}

export default Following