import { UserAuth } from "../../contexts/AuthenticationContext";
import { Feeling, Photo, Video } from "../../icons";

const Home = () => {

  const { user } = UserAuth()

  return (
    <main
      className="h-screen bg-white dark:bg-secondary rounded-3xl flex gap-5 p-5"
    >
      <div className="w-[29rem] h-fit">
        <button className="bg-lightWhite dark:bg-principal w-full h-fit rounded-xl p-3 flex flex-col gap-4">
          <div className="w-full h-12 flex gap-2">
            <img src={user.photoURL} alt="user" className="h-full aspect-square rounded-full" />
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

      </div>

      <div className="h-20 grow border">

      </div>
    </main>
  )
}

export default Home;