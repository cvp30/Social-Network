import { useParams } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import Button from "./components/Button";
import { Upload } from "../../icons";


const Profile = () => {

  const { userSlug } = useParams();

  const { profile } = useProfile()

  const isOwnProfile = profile.slug === userSlug
  const isOwn = true

  return (
    <section className="w-full h-full">
      <div className="w-full h-80 relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://static.vecteezy.com/system/resources/previews/003/334/911/non_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg"
          alt="coverPhoto"
        />
        {
          isOwn && (
            <Button
              icon={<Upload />}
              className="absolute right-4 bottom-4"
              value="Edit Cover Photo"
              color="lightWhite"
            />
          )
        }

        <div className="absolute w-40 h-40 rounded-full p-2  left-8 -bottom-10 border-2 border-lightWhite">
          <img
            className="w-full h-full rounded-full"
            src={profile.photoURL}
            alt="photoUser"
          />
          {
            isOwn && (
              <button className="absolute right-0 bottom-4 rounded-full bg-lightWhite hover:bg-white p-1 shadow-md ">
                <Upload />
              </button>
            )
          }

        </div>




      </div>


    </section>
  )
}

export default Profile;