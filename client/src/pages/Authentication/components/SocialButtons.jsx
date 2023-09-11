// import { toast } from "react-hot-toast";
// import { GithubLogo, GoogleLogo } from "../../../icons"
// import { GoogleSignIn, githubSignIn } from "../../../services/firebase";
// // import { RegisterUser } from "../../../services/API";
// // import { useMutation } from "@tanstack/react-query";


// const SocialButtons = () => {
//   // const { mutate } = useMutation({ mutationFn: RegisterUser })

//   const handleGoogleSignIn = async () => {
//     try {
//       const { user } = await GoogleSignIn()

//       mutate({
//         email: user.email,
//         username: user.displayName,
//         photoURL: user.photoURL,
//       })
//     }
//     catch (error) {
//       toast.error(error, {
//         duration: 3000,
//         className: 'text-[red] text-sm text-center'
//       })
//     }
//   }

//   const handleGithubSignIn = async () => {
//     try {
//       console.log("first")
//       const { user } = await githubSignIn();
//       console.log(user)
//       // addUser.mutate({
//       //   email: user.email,
//       //   username: user.displayName,
//       //   photoURL: user.photoURL,
//       // })

//     } catch (error) {
//       toast.error(error, {
//         duration: 3000,
//         className: 'text-[red] text-sm text-center'
//       })
//     }
//   }

//   // if (loading) return <Loading />
//   // if (isSuccess) return <Navigate to="/" replace={true} />

//   return (
//     <div className="w-full flex flex-col md:flex-row md:justify-between">
//       <button
//         // onClick={handleGoogleSignIn}
//         className="flex justify-center items-center gap-2  bg-[#cf4332] text-[white] w-full md:w-fit px-4 py-3 rounded-lg"
//       >
//         <GoogleLogo />
//         <p >Log in with Google</p>
//       </button>
//       <button
//         // onClick={handleGithubSignIn}
//         className="flex justify-center items-center gap-2 bg-[rgb(24,23,23)] text-white w-full md:w-fit px-4 py-3 rounded-lg"
//       >
//         <GithubLogo />
//         <p>Log in with Github</p>
//       </button>

//     </div>
//   )
// }

// export default SocialButtons;