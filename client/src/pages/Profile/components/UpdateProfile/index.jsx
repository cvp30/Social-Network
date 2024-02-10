import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react"
import UpdateDataForm from "./UpdateDataForm"
import { UpdateProfileContextProvider } from "../../contexts/UpdateProfileContext";


const UpdateProfile = () => {

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        variant="bordered"
        radius="full"
        size="md"
        className="text-base font-semibold"
      >
        Edit Profile
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        backdrop="blur"
        placement="top"
        scrollBehavior="inside"
      >
        <ModalContent className="p-3 flex flex-col gap-2 bg-lightWhite dark:bg-principal rounded-lg">
          <UpdateProfileContextProvider>
            <UpdateDataForm
              onClose={onClose}
            />
          </UpdateProfileContextProvider>

        </ModalContent>
      </Modal>
    </>
  )
}


export default UpdateProfile