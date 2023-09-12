import { Link, useParams } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import { LinkUrl, Location, Upload } from "../../icons";
import Button from "../../components/Button";


const Profile = () => {

  const { userSlug } = useParams();

  const { profile } = useProfile()

  const isOwn = profile.slug === userSlug
  const isOwnProfile = true
  console.log(profile)
  return (
    <section className="w-full h-full flex flex-col gap-6">
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

          <div className="absolute w-40 h-40 rounded-full p-2  left-8 -bottom-10 border-2 border-white dark:border-darkButton">
            <img
              className="w-full h-full rounded-full"
              src={profile.photoURL}
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
            <p className="text-4xl capitalize dark:text-lightWhite">{profile.username}</p>
            <p className="text-darkSilver font-medium capitalize">{profile.bio}</p>
          </div>

          {
            isOwnProfile ?
              <Button value="Edit basic info" />
              :
              <Button value="Follow" />
          }
        </div>
      </header>

      <main className="w-full grid grid-cols-[1fr_2fr_1fr] grid-rows-[1fr] gap-x-4 rounded-xl bg-white dark:bg-secondary p-5 h-fit">

        <div className="flex flex-col gap-4 p-4 rounded-xl bg-lightWhite dark:bg-principal dark:text-white">
          <p className="font-bold">INTRO</p>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <Link to={`https://${profile.website}`} target="_blank" className="flex gap-2 w-fit">
                <LinkUrl />
                {profile.website && <p>{profile.website}</p>}
              </Link>
            </li>

            <li>
              <Location />
              {profile.location && <p>{profile.location}</p>}
            </li>

            <li>
              120 Followers
            </li>

            <li>
              203 Following
            </li>



          </ul>

        </div>
        <div className="rounded-xl bg-lightWhite dark:bg-principal dark:text-white">b</div>
        <div className="rounded-xl bg-lightWhite dark:bg-principal dark:text-white">c</div>
      </main>



    </section>
  )
}

export default Profile;