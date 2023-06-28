import { toast } from "react-hot-toast";
import { GithubLogo, GoogleLogo } from "../../../icons"
import { useNavigate } from "react-router-dom";
import { GoogleSignIn, githubSignIn } from "../../../services/firebase";

const SocialButtons = () => {

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignIn()
      navigate('/');
    } catch (error) {
      toast.error(error, {
        duration: 3000,
        className: 'text-[red] text-sm text-center'
      })
    }
  }
  const handleGithubSignIn = async () => {
    try {
      await githubSignIn();
      navigate('/');
    } catch (error) {
      toast.error(error, {
        duration: 3000,
        className: 'text-[red] text-sm text-center'
      })
    }
  }

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between">
      <button
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center gap-2  bg-[#cf4332] text-[white] w-full md:w-fit px-4 py-3 rounded-lg"
      >
        <GoogleLogo />
        <p >Log in with Google</p>
      </button>
      <button
        onClick={handleGithubSignIn}
        // CAMBIAR COLOR POR DARKCOLOR
        className="flex justify-center items-center gap-2 bg-[rgb(24,23,23)] text-white w-full md:w-fit px-4 py-3 rounded-lg"
      >
        {/* <GithubLogo /> */}
        <GithubLogo />
        <p>Log in with Github</p>
      </button>

    </div>
  )
}

export default SocialButtons;