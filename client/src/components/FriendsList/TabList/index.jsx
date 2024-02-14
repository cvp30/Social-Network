import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"
import { ChatTabContext } from "../../../contexts/ChatTabContext"
import { Close } from "../../../icons"


const TabList = () => {

  const { tabList, removeChatToList } = ChatTabContext()


  return (
    <div className="z-50 w-fit fixed bottom-0 right-[21rem] flex gap-1">
      {
        tabList.map((tab, i) => {
          return (
            <Accordion
              onClick={removeChatToList}
              key={i}
              isCompact
              className="bg-default rounded-t-lg border border-secondary"
            >
              <AccordionItem
                title={tab.username}
                className="w-56"
                startContent={
                  <Avatar
                    className="w-7 h-7"
                    radius="full"
                    src={tab.photoURL}
                  />
                }
                indicator={<Close />}
              >
                {tab.username}
              </AccordionItem>
            </Accordion>
          )
        })
      }
    </div>
  )
}

export default TabList