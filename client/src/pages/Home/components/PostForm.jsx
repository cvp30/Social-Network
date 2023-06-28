import { Close, Feeling, Photo, Video } from "../../../icons";
import PropTypes from 'prop-types';
import { UserAuth } from "../../../contexts/AuthenticationContext";
import Avatar from "../../../assets/defaultUser.png"

const PostForm = ({ CloseForm }) => {
  const { user } = UserAuth();

  const option = "flex gap-1 items-center hover:bg-darkButton p-2 rounded-xl";
  return (
    <form className="w-full h-fit flex flex-col gap-3 p-3">
      <header className="h-fit flex justify-between">
        <p>Create a post</p>

        <button onClick={CloseForm} className="hover:bg-darkButton rounded-full">
          <Close />
        </button>
      </header>

      <hr />

      <main className="h-fit flex flex-col gap-2">
        <div className="flex items-center gap-3 h-14">
          <img src={user.photoURL ?? Avatar} alt="user" className="h-full aspect-square rounded-full" />
          <div>
            <p>{user.displayName}</p>
            <select
              name="visibility"
              id="visibility"
              className="w-24 bg-secondary outline-none rounded-xl">
              <option value="friends">Friends</option>
              <option value="public">Public</option>
              <option value="me">Only me</option>
            </select>
          </div>
        </div>

        <textarea
          name="description"
          placeholder="Whats happening?"
          className="w-full h-32 p-2 resize-none outline-none bg-secondary rounded-xl"
        >
        </textarea>
      </main>

      <footer className="w-full h-fit flex flex-col gap-4">
        <div className="flex justify-around items-center">
          <button className={option}>
            <Video />
            <p>Live Video</p>
          </button>
          <button className={option}>
            <Photo />
            <p>Photo/Video</p>
          </button>

          <button className={option}>
            <Feeling />
            <p>Feeling</p>
          </button>
        </div>

        <button className="grow bg-blue text-white py-3 rounded-lg">
          Post
        </button>

      </footer>

    </form>
  )
}

PostForm.propTypes = {
  CloseForm: PropTypes.func,
}

export default PostForm;