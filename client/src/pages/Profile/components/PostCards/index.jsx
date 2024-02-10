import { useQuery } from "@apollo/client"
import { GET_PROFILE_POSTS } from "../../graphql/GetProfilePosts"
import PostCard from "../../../../components/PostCard"
import { DataProfile } from "../../contexts/DataProfileContext";

const PostCards = () => {

  const { profile, loading } = DataProfile()

  const { loading: loadingPosts, data } = useQuery(GET_PROFILE_POSTS, {
    variables: { slug: profile?.slug },
    skip: loading
  })

  if (loading || loadingPosts) return <h4>LOADING</h4>

  return (
    <div className="w-full md:w-[33rem] h-fit rounded-xl flex flex-col gap-6">
      {
        data?.GetPostsFromUser.map(post => {
          return (
            <PostCard
              key={post.id}
              photoURL={post.userId.photoURL}
              username={post.userId.username}
              slug={post.userId.slug}
              date={post.createdAt}
              isFollower={true}
              description={post.content}
              photoPost={post.image}
            />
          )
        })
      }
    </div>
  )
}


export default PostCards