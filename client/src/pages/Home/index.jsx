import RecentEvents from "../../components/RecentEvents";
import RecommendedUsers from "../../components/RecommendedUsers";
import { PostFormContextProvider } from "../../contexts/PostFormContext";
import PostCards from "./components/PostCards";
import PostForm from "./components/PostForm";

const Home = () => {

  return (
    <main
      className="w-full h-fit flex justify-evenly gap-4"
    >
      <div className="w-[33rem] h-fit flex flex-col gap-4">
        <PostFormContextProvider>
          <PostForm />
        </PostFormContextProvider>

        <PostCards />
      </div>

      <div className="w-80 h-fit hidden xl:flex flex-col items-center gap-4">
        <RecommendedUsers />
        <RecentEvents />
      </div>
    </main>
  )
}

export default Home;