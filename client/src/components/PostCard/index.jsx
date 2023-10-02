import { Button, Image } from '@nextui-org/react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import { Activity, Comment, Like, Share } from '../../icons';
import { CurrentDate } from '../../utils';
import LikeButton from './Buttons/LikeButton';

const PostCard = ({ photoURL, username, slug, date, isFollower, description, photoPost, comments, shares }) => {

  const postDate = CurrentDate(date);

  return (
    <article className='w-full h-fit bg-default rounded-xl flex flex-col gap-4 p-5'>
      <PostHeader username={username} photoURL={photoURL} slug={slug} date={postDate} isFollower={isFollower} />

      <main className='w-full flex flex-col items-center gap-4'>
        <p className='w-full'>{description}</p>
        <Image
          removeWrapper
          src={photoPost}
          alt="photoPost"
        />
      </main>

      {/* //TODO -> CAMBIAR CADA BUTTON A COMPONENTE PARA AGREGAR SU FUNCIONALIDAD E INTERACCION CON LA DB  */}
      <footer className='w-full flex justify-between items-center'>
        <LikeButton />
        <Button
          aria-label="Like"
          startContent={<Like />}
          className='hover:text-primary'
        >
          123
        </Button>
        <Button
          aria-label="Like"
          startContent={<Share />}
          className='hover:text-danger'
        >
          410
        </Button>
        <Button
          aria-label="Like"
          startContent={<Activity />}
          className='hover:text-warning'
        >
          34.6k
        </Button>
      </footer>
    </article>
  )
}

PostCard.propTypes = {
  photoURL: PropTypes.string,
  username: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  isFollower: PropTypes.bool,
  photoPost: PropTypes.string,
  users: PropTypes.array,
  comments: PropTypes.number,
  shares: PropTypes.number,
}

export default PostCard