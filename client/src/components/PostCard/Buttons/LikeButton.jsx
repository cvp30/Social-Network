import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { Close, Comment } from "../../../icons"


const LikeButton = () => {

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        onPress={onOpen}
        aria-label="Like"
        startContent={<Comment />}
        className='hover:text-success'
      >
        371
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        backdrop="blur"
        closeButton={(
          <Button onPress={onClose} color="danger" variant="light" isIconOnly>
            <Close />
          </Button>
        )}
      >
        <ModalContent>
          {
            (onClose) => (
              <>
                <ModalHeader className="flex  gap-1">
                  {/* //TODO -> COLOCAR EL POST HEADER COMPONENT */}
                </ModalHeader>

                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    onPress={onClose}
                  >
                    close
                  </Button>
                </ModalFooter>
              </>
            )
          }
        </ModalContent>
      </Modal>

    </>
  )
}

export default LikeButton