import PostForm from "../../components/PostForm";
import { PostFormContextProvider } from "../../contexts/PostFormContext";
import PostCards from "./components/PostCards";

const Home = () => {

  return (
    <main
      className="h-fit bg-secondary md:rounded-xl flex justify-center gap-4 py-2 sm:px-2"
    >
      <div className="w-full sm:w-[35rem] h-fit flex flex-col gap-4">
        <PostFormContextProvider>
          <PostForm />
        </PostFormContextProvider>

        <PostCards />
      </div>
    </main>
  )
}

export default Home;