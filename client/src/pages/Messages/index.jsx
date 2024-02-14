import ChatList from "./components/ChatList";


const Messages = () => {
  return (
    <section className="w-full h-fit flex gap-4">
      <ChatList />

      <div className="grow h-96 border"></div>

    </section>
  )
}

export default Messages;