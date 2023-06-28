import { useState } from "react";
import { UserAuth } from "../../../contexts/AuthenticationContext";
import { Feeling, Photo, Video } from "../../../icons";
import PostForm from "./PostForm";
import Avatar from "../../../assets/defaultUser.png"

const ModalPost = () => {
  const { user } = UserAuth();
  const [isOpen, setIsOpen] = useState(false);

  const OpenForm = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const CloseForm = () => {
    setIsOpen(false)
    document.body.style.overflow = '';
  }

  return (
    <>
      <button onClick={OpenForm} className="bg-lightWhite dark:bg-principal w-full h-fit rounded-xl p-3 flex flex-col gap-4">
        <div className="w-full h-12 flex gap-2">
          <img src={user.photoURL ?? Avatar} alt="user" className="h-full aspect-square rounded-full" />
          <p className="grow text-start p-3 bg-white dark:bg-secondary rounded-xl">
            What&apos;s happening?
          </p>
        </div>

        <div className="w-full text-sm dark:text-white flex items-center gap-6">
          <div className="flex gap-2">
            <Video />
            <p>Live Video</p>
          </div>

          <div className="flex gap-2">
            <Photo />
            <p>Photo/Video</p>
          </div>

          <div className="flex gap-2">
            <Feeling />
            <p>Feeling</p>
          </div>

          <div className="grow bg-blue text-white py-3 rounded-lg">
            Post
          </div>
        </div>

      </button>

      {
        isOpen && (
          <div className="z-20 bg-[#212833ce] absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center text-white">
            <div className="w-[29rem] h-fit bg-principal rounded-2xl">
              <PostForm CloseForm={CloseForm} />
            </div>

          </div>
        )
      }
    </>
  )
}

export default ModalPost;