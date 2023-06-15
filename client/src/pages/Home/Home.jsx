import { UserAuth } from "../../contexts/AuthContext";


const Home = () => {

  const { user } = UserAuth();

  return (
    <section className="flex w-full ">
      hola {user.displayName}
    </section>
  )
}

export default Home;