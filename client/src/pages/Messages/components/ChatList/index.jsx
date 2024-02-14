import { useUser } from "../../../../hooks/useUser"
import ChatCard from "./ChatCard"

const ChatList = () => {

  const { profile, loading } = useUser()

  if (loading) return <p>LOADING</p>

  return (
    <div className="w-80 h-80 p-4 bg-default rounded-xl flex flex-col gap-2">

      <ChatCard
        photoURL={profile.photoURL}
        username={profile.username}
        lastMessage="hello world"
        time="12:15pm"
      />
      <ChatCard
        photoURL={profile.photoURL}
        username={profile.username}
        lastMessage="hello world"
        time="12:15pm"
      />
      <ChatCard
        photoURL={profile.photoURL}
        username={profile.username}
        lastMessage="hello world"
        time="12:15pm"
      />
      <ChatCard
        photoURL={profile.photoURL}
        username={profile.username}
        lastMessage="hello world"
        time="12:15pm"
      />
    </div>
  )
}

export default ChatList