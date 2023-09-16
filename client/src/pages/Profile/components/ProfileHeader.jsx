import { useState } from "react"
import ProfileForm from "./ProfileForm"
import { Upload } from "../../../icons"
import Button from "../../../components/Button";
import PropTypes from 'prop-types';


const ProfileHeader = ({ photoURL, username, bio, slug, userSlug }) => {

  const [isOpen, setIsOpen] = useState(false)
  const isOwn = slug === userSlug
  const isOwnProfile = true

  const OpenModal = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const CloseModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <header
      className="w-full h-[28rem] flex flex-col justify-between gap-8 shadow-md rounded-xl"
    >
      <div className="w-full h-2/3 relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://static.vecteezy.com/system/resources/previews/003/334/911/non_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg"
          alt="coverPhoto"
        />
        {
          isOwnProfile && (
            <button
              className="absolute right-4 bottom-4 flex gap-2 py-2 px-3 font-medium rounded-lg bg-lightWhite hover:bg-white dark:bg-secondary dark:hover:bg-darkButton dark:text-white transition-all duration-150 ease-in-out"
            >
              <Upload />
              Edit Cover Photo
            </button>
          )
        }

        <div className="absolute w-40 h-40 rounded-full left-8 -bottom-10 border-2 border-white dark:border-darkButton">
          <img
            className="w-full h-full rounded-full"
            src={photoURL}
            alt="photoUser"
          />
          {
            isOwnProfile && (
              <button className="absolute right-0 bottom-4 rounded-full bg-lightWhite hover:bg-white dark:bg-darkButton dark:hover:bg-secondary dark:text-white p-1 shadow-md transition-all duration-150 ease-in-out">
                <Upload />
              </button>
            )
          }

        </div>
      </div>

      <div
        className="w-full h-1/3 px-5 flex justify-between items-center"
      >
        <div className="flex flex-col gap-2">
          <p className="text-4xl capitalize dark:text-lightWhite">{username}</p>
          <p className="text-darkSilver font-medium capitalize">{bio}</p>
        </div>

        {
          isOwnProfile ?
            <Button
              onClick={OpenModal}
              value="Edit basic info"
            />
            :
            <Button
              value="Follow"
            />
        }
        {
          isOpen && <ProfileForm CloseModal={CloseModal} />
        }
      </div>
    </header>
  )
}

ProfileHeader.propTypes = {
  photoURL: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string,
  slug: PropTypes.string,
  userSlug: PropTypes.string,
}

export default ProfileHeader