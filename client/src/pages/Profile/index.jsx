import { Link, useParams } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import { LinkUrl, Location } from "../../icons";
// import Button from "../../components/Button";
// import Modal from "../../components/Modal";
// import { useState } from "react";
import PostCards from "../Home/components/PostCards";
import PostForm from "../../components/PostForm";
// import ProfileForm from "./components/UpdateDataForm";
// import ProfileHeader from "./components/ProfileHeader";
import ProfileHeader from "./components/ProfileHeader";

const Profile = () => {

  const { userSlug } = useParams();
  const { profile } = useProfile()


  return (
    <section className="w-full h-full flex flex-col gap-6">
      <ProfileHeader
        photoURL={profile.photoURL}
        username={profile.username}
        bio={profile.bio}
        slug={profile.slug}
        userSlug={userSlug}
      />

      <main className="w-full grid grid-cols-[1fr_2fr_1fr] grid-rows-[1fr] gap-x-4 rounded-xl bg-white dark:bg-secondary p-5 h-fit">

        <div className="flex flex-col gap-7 p-4 rounded-xl bg-lightWhite dark:bg-principal dark:text-white">
          <p className="font-bold">INTRO</p>
          <ul className="list-none flex flex-col gap-4">
            <li>
              <Link to={`https://${profile.website}`} target="_blank" className="flex gap-2 w-fit">
                <LinkUrl />
                {profile.website && <p>{profile.website}</p>}
              </Link>
            </li>

            <li className="flex gap-2">
              <Location />
              {profile.location && <p>{profile.location}</p>}
            </li>

            <li>
              <p>120 Followers</p>
            </li>

            <li>
              <p>203 Following</p>
            </li>
          </ul>

        </div>
        <div className="rounded-xl flex flex-col gap-5">
          <PostForm />
          <PostCards />
        </div>
        <div className="rounded-xl bg-lightWhite dark:bg-principal dark:text-white">c</div>
      </main>



    </section>
  )
}

export default Profile;