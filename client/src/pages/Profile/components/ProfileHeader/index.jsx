import PropTypes from 'prop-types';
import UpdateProfile from '../UpdateProfile';
import { DataProfile } from '../../contexts/DataProfileContext';
import ProfileHeaderSkeleton from './ProfileHeaderSkeleton';

const ProfileHeader = () => {

  const { profile, loading, isCurrentUser } = DataProfile()

  if (loading) return (
    <ProfileHeaderSkeleton />
  )
  return (
    // <ProfileHeaderSkeleton />
    <header
      className="w-full h-fit flex flex-col gap-10 shadow-md rounded-xl pb-5 bg-default"
    >
      <div
        className="w-full aspect-[3/1] rounded-xl relative bg-cover bg-center"
        style={{
          backgroundImage: profile.coverPhoto ? `url(${profile.coverPhoto})` : 'none',
          backgroundColor: profile.coverPhoto ? 'transparent' : '#4b5771',
        }}
      >
        <div
          className="absolute w-20 sm:w-28 aspect-square rounded-full left-5 -bottom-10 border-2 border-ModuleItem bg-cover bg-center"
          style={{
            backgroundImage: profile.photoURL ? `url(${profile.photoURL})` : 'none',
            backgroundColor: profile.photoURL ? 'transparent' : '#4b5771',
          }}
        >
        </div>
      </div>



      <div className='w-full h-fit flex sm:flex-row sm:justify-between flex-col  items-center sm:px-5 sm:gap-0 gap-2'>
        <div
          className="w-full sm:w-fit h-fit flex flex-col gap-2"
        >
          <div className='w-full flex flex-col'>
            <h4>{profile.username}</h4>
            <p className="text-darkSilver font-medium">@{profile.slug}</p>
          </div>
          <p>{profile.bio}</p>
        </div>

        <div>
          {
            isCurrentUser ?
              <UpdateProfile />
              :
              <></>
          }
        </div>

      </div>


    </header>
  )
}

ProfileHeader.propTypes = {
  isCurrentUser: PropTypes.bool,
}

export default ProfileHeader
