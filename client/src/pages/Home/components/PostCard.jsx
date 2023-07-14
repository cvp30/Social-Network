import { Link } from "react-router-dom";
import Modal from "./Modal";
import { Comment, Like, Send, Share } from "../../../icons";
import Avatar from "../../../assets/defaultUser.png"
import PropTypes from 'prop-types';

const PostCard = ({ image, name, date, description, imagePost, users, comments, shares }) => {

  return (
    <article className="w-full h-fit p-4 dark:bg-principal bg-lightWhite rounded-xl flex flex-col gap-4">
      <header className="w-full h-12 flex gap-2">
        <Link>
          <img
            src={image}
            alt="user_avatar"
            className="h-full aspect-square rounded-full"
          />
        </Link>

        <Link className="flex flex-col justify-center">
          <p className="dark:text-lightWhite font-semibold">{name}</p>
          <p className="dark:text-lightWhite text-xs">{date}</p>
        </Link>
      </header>

      <main className="w-full h-fit flex flex-col gap-3">
        <Modal
          text={description}
        />

        <img
          src={imagePost} alt="postImg"
          className="w-full aspect-square bg-cover bg-no-repeat rounded-xl"
        />

        <div className="w-full flex justify-between">
          <Link className="w-fit flex items-center -space-x-2">
            {
              users.slice(0, 3).map((user, key) => {
                return (
                  <img
                    key={key}
                    src={user.photoURL ?? Avatar}
                    className="h-6 aspect-square rounded-full"
                  />
                )
              })
            }
            {
              users.length > 3 && (
                <p className="dark:text-lightWhite text-sm pl-3">
                  +{users.length - 3}
                </p>
              )
            }
          </Link>

          <div className="w-fit flex items-center gap-4 dark:text-lightWhite text-sm">
            <Link>{comments} comments</Link>
            <Link>{shares} Share</Link>
          </div>
        </div>

        <hr />

        <div className="w-full flex justify-between dark:text-lightWhite">
          <Link className="flex gap-1">
            <Like />
            Like
          </Link>

          <Link className="flex gap-1">
            <Comment />
            Comments
          </Link>

          <Link className="flex gap-1">
            <Share />
            Share
          </Link>

        </div>
        <hr />
      </main>

      <footer className="w-full h-fit">
        <Link className="h-11 flex items-center gap-2">
          <img
            src={image}
            alt="img_user"
            className="h-full aspect-square rounded-full"
          />

          <div
            className="h-full grow dark:text-white flex items-center px-2 dark:bg-secondary rounded-xl bg-white"
          >
            Write a comment...
          </div>

          <div className="h-full aspect-square flex justify-center items-center dark:bg-secondary dark:text-lightWhite rounded-xl">
            <Send />
          </div>
        </Link>

      </footer>
    </article>
  )
}

PostCard.propTypes = {
  image: PropTypes.any,
  name: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  imagePost: PropTypes.string,
  comments: PropTypes.number,
  shares: PropTypes.number,
  users: PropTypes.array
}

export default PostCard;