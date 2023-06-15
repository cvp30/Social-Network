import Auth from "../pages/Auth/Auth";
import { UserAuth } from "../contexts/AuthContext";
import Navigation from "./Navigation";

const MainPage = () => {
  const { user } = UserAuth();
  console.log(user)

  return user?.email ? <Navigation /> : <Auth />;

}

export default MainPage;