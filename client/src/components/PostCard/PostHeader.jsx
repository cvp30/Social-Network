import { Button, User } from "@nextui-org/react"
import PropTypes from 'prop-types';

const PostHeader = ({ username, photoURL, slug, date, isFollower }) => {
  return (
    <header className='w-full h-fit flex justify-between items-center'>
      <User
        name={(
          <div className='flex items-center gap-2'>
            <p className="text-base font-semibold">
              {username}
            </p>
          </div>
        )}
        description={(
          <p className="text-sm text-darkSilver">@{slug} · {date}</p>
        )}
        avatarProps={{
          src: photoURL,
        }}
      />

      {
        isFollower ? (
          <Button
            variant='bordered'
            color='textItem'
            className='w-28 group border-1 hover:border-danger hover:bg-danger-100 text-base font-semibold'
          >
            <span className="group-hover:hidden">Following</span>
            <span className="hidden group-hover:inline group-hover:text-[red]  ">Unfollow</span>
          </Button>
        ) : (
          <Button
            // variant='faded'
            className='w-28 text-base bg-followBtn text-default font-semibold'
          >
            Follow
          </Button>
        )
      }
    </header>
  )
}

PostHeader.propTypes = {
  photoURL: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  isFollower: PropTypes.bool,
  photoPost: PropTypes.string,
  slug: PropTypes.string,
}

export default PostHeader