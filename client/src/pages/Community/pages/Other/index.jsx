import { useQuery } from "@apollo/client"
import { GET_ALL_USERS } from "../../graphql/GetAllUsers"
import UserCard from "../../components/UserCard"
import photoProfile from "../../../../assets/avatar.jpg"
import OtherSkeleton from "./OtherSkeleton"

const Other = () => {

  const { loading, data } = useQuery(GET_ALL_USERS)

  if (loading) return <OtherSkeleton />

  return (
    <>
      {
        data.GetAllUsers.length ? (
          data.GetAllUsers.map(user => {
            return (
              <UserCard
                key={user.id}
                photoURL={user.photoURL || photoProfile}
                username={user.username}
                bio={user.bio}
                github={user.github}
                linkedin={user.linkedin}
                portfolio={user.portfolio}
              />
            )
          })
        )
          :
          <h4>No users found</h4>
      }
    </>
  )
}

export default Other