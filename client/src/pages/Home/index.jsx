import PostForm from "../../components/PostForm";
import PostCards from "./components/PostCards";

const Home = () => {

  return (
    <main
      className="h-fit bg-white dark:bg-secondary rounded-3xl flex gap-5 p-5"
    >
      <div className="w-[29rem] h-fit flex flex-col gap-5">

        <PostForm />

        <PostCards />

      </div>

      <div className="h-20 grow border">

      </div>
    </main>
  )
}

export default Home;