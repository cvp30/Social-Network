import { useParams } from "react-router-dom";
import ProfileHeader from "./components/ProfileHeader";
import ProfileInfo from "./components/ProfileInfo";
import PostCards from "./components/PostCards";
import RecommendedUsers from "../../components/RecommendedUsers";
import RecentEvents from "../../components/RecentEvents";
import { DataProfileContextProvider } from "./contexts/DataProfileContext";

const Profile = () => {

  const { userSlug } = useParams()

  return (
    <DataProfileContextProvider slug={userSlug}>
      <section className="w-full h-fit flex flex-col gap-6 md:p">
        <ProfileHeader />

        <div className="w-full h-fit flex flex-col md:flex-row justify-evenly items-center md:items-start gap-4 md:p-4 rounded-xl bg-secondary">
          <ProfileInfo />

          <PostCards />

          <div className="xl:w-80 h-fit hidden xl:flex flex-col gap-4">
            <RecommendedUsers />
            <RecentEvents />
          </div>
        </div>
      </section>
    </DataProfileContextProvider>
  )
}

export default Profile;