import { Input } from "@nextui-org/react";
import { Search } from "../../../icons";
import ContactCard from "./ContactCard";
import { GET_ALL_FRIENDSHIPS } from "../../../graphql/GetAllFriendships";
import { useQuery } from "@apollo/client";
import ContactCardSkeleton from "./ContactCardSkeleton";

const Contacts = () => {

  const { data, loading } = useQuery(GET_ALL_FRIENDSHIPS)


  return (
    <div className="w-full h-[28rem] contacts flex flex-col gap-3 sticky top-[4.5rem] overflow-y-auto overscroll-contain">
      <Input
        placeholder="Search friends..."
        size="lg"
        variant="bordered"
        startContent={<Search />}
        type="search"
        radius="md"
        classNames={{
          inputWrapper: "pr-0 border-ModuleItem",
          input: "rounded-r-xl"
        }}
      />

      <p className="font-semibold">Friends</p>

      <div className="flex flex-col gap-2">
        {
          loading ?
            <ContactCardSkeleton />
            :
            <>
              {
                data.GetUserFriendships.map((user, key) => {
                  return (
                    <ContactCard
                      key={key}
                      id={user._id}
                      photoURL={user.photoURL}
                      username={user.username}
                      bio={user.bio}
                      status={user.status}
                    />
                  )
                })
              }
            </>

        }


      </div>

    </div>
  )
}

export default Contacts;