import Avatar from "../../../assets/defaultUser.png"
import { UserAuth } from "../../../contexts/AuthenticationContext";
import PostCard from "./PostCard";

const PostCards = () => {
  // USUARIO TEMPORAL
  const { user } = UserAuth()
  const users = Array.from({ length: 5 }, () => ({ ...user.state }));

  const totalUsers = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col gap-5">
      {
        totalUsers.map((value, key) => {
          return (
            <PostCard
              key={key}
              image={user.state.photoURL ?? Avatar}
              name={user.state.displayName}
              date="15h."
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              imagePost="https://cdn2.dineroenimagen.com/media/dinero/styles/original/public/images/2021/12/torre-eiffel.jpg"
              users={users}
              comments={3}
              shares={10}
            />
          )
        })
      }


    </div>
  )
}

export default PostCards;