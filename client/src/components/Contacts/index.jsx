import { Input } from "@nextui-org/react";
import { Search } from "../../icons";
import ContactCard from "./ContactCard";

const Contacts = () => {

  const friends = [
    {
      name: "carlos david valer pacompia",
      description: "frontend developer",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      state: true,
    }
  ]

  return (
    <div className="w-full contacts flex flex-col gap-3 sticky top-[4.5rem] overflow-y-auto overscroll-contain px-4">
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

      <div className="flex flex-col gap-1">
        {
          friends.map((user, key) => {
            return (
              <ContactCard
                key={key}
                route=""
                name={user.name}
                description={user.description}
                image={user.image}
                state={user.state}
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default Contacts;