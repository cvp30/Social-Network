import { useQuery } from "@apollo/client";
import PostCard from "../../../components/PostCard";
import PropTypes from 'prop-types';
import { GET_ALL_POSTS } from "../../../graphql/GetAllPosts";

const PostCards = () => {

  const { loading, data } = useQuery(GET_ALL_POSTS)

  if (loading) return <h3>LOADING</h3>

  return (
    <div className="flex flex-col gap-3">
      {
        data.GetAllPosts.map(post => {
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

PostCards.propTypes = {
  posts: PropTypes.object,
}

export default PostCards;