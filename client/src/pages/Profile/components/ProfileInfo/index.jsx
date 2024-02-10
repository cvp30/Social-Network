import { Link } from "react-router-dom"
import { Email, Linkedin, Location, Website } from "../../../../icons"
import { DataProfile } from "../../contexts/DataProfileContext";
import ProfileInfoSkeleton from "./ProfileInfoSkeleton";

const ProfileInfo = () => {

  const { profile, loading } = DataProfile()

  if (loading) return <ProfileInfoSkeleton />
  return (
    <div className="w-full md:w-72 xl:w-60 h-fit overflow-hidden p-4 bg-default rounded-xl flex flex-col gap-8">
      <p className="text-lg font-semibold">INTRO</p>

      <div className="w-full h-fit flex flex-col gap-5">
        {
          profile.email ? (
            <div className="line-clamp-1 w-fit flex gap-2">
              <Email />
              <p className=""> {profile.email} </p>
            </div>
          ) :
            <></>
        }
        {
          profile.location ? (
            <div className="w-fit flex gap-2">
              <Location />
              <p> {profile.location} </p>
            </div>
          ) :
            <></>
        }
        {
          profile.portfolio ? (
            <a
              className="w-fit flex gap-2"
              href={profile.portfolio}
              target="_blank"
              rel='noreferrer'
            >
              <span> <Website /> </span>
              <p> portfolio </p>
            </a>
          ) :
            <></>
        }
        {
          profile.github ? (
            <a
              className="w-fit flex gap-2"
              href={profile.github}
              target="_blank"
              rel='noreferrer'
            >
              <span> <Website /> </span>
              <p> Github </p>
            </a>
          ) :
            <></>
        }
        {
          profile.linkedin ? (
            <a
              className="w-fit flex gap-2"
              href={profile.linkedin}
              target="_blank"
              rel='noreferrer'
            >
              <span> <Linkedin /> </span>
              <p> Linkedin </p>
            </a>
          ) :
            <></>
        }
        <Link to="" className="w-fit">1231 following</Link>
        <Link to="" className="w-fit">10 followers</Link>
      </div>


    </div>
  )
}

export default ProfileInfo