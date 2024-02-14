import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"
import { ArrowUp, ArrowLeft } from "../../icons"
import Contacts from "./Contacts"


const FriendsList = () => {
  return (
    <div className="z-50 fixed bottom-0 right-0 mr-4 shadow-medium bg-default border border-secondary rounded-t-lg">
      <Accordion isCompact>
        <AccordionItem
          className="w-72"
          indicator={({ isOpen }) => (isOpen ? <ArrowLeft /> : <ArrowUp />)}
          key="1"
          aria-label="messages-friends"
          title="Messages"
        >
          <Contacts />
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FriendsList