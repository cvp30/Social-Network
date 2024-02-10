import PropTypes from 'prop-types';
import { Button } from "@nextui-org/react"
import { GithubLogo, Linkedin, Website } from "../../../icons"

const UserCard = ({ photoURL, username, bio, github, linkedin, portfolio }) => {

  return (
    <article className="w-[250px] h-40 bg-default rounded-xl flex flex-col p-2">
      <header className="w-full h-20 flex items-center gap-3">
        <img
          src={photoURL}
          className="rounded-full h-16 aspect-square object-cover"
        />

        <div className="grow h-full flex flex-col">
          <div className="w-full h-fit">
            <p>{username}</p>
            <p className="text-sm text-darkSilver">{bio}</p>
          </div>
          <div className="w-full grow flex justify-start items-center gap-3">
            {
              github &&
              <a href={`${github}`}>
                <GithubLogo />
              </a>
            }
            {
              linkedin &&
              <a href={`${linkedin}`}>
                <Linkedin />
              </a>
            }
            {
              portfolio &&
              <a href={`${portfolio}`}>
                <Website />
              </a>
            }
          </div>
        </div>
      </header>

      <footer className="w-full grow flex flex-col gap-1">
        <div className='w-full flex justify-around items-center'>
          <Button color="primary" variant="ghost" className="w-1/3" radius="sm">
            Ignore
          </Button>
          <Button color="primary" className="w-1/3" radius="sm">
            Follow
          </Button>
        </div>
        <Button color="primary" className="w-full" variant="ghost" radius="sm">
          Add User
        </Button>
      </footer>
    </article>
  )
}

UserCard.propTypes = {
  photoURL: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  portfolio: PropTypes.string,
}

export default UserCard