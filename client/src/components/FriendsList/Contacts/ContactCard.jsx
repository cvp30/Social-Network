import PropTypes from 'prop-types';
import { Avatar, Badge, Button } from "@nextui-org/react";
import { ChatTabContext } from '../../../contexts/ChatTabContext';


const ContactCard = ({ id, photoURL, username, bio, status }) => {

  const { addChatToList } = ChatTabContext()

  const handleChatTab = () => {
    addChatToList({
      id,
      username,
      photoURL
    })
  }

  return (
    <Button onClick={handleChatTab} size="lg" className="p-1 rounded-lg hover:bg-darkBorder hover:text-white">
      <div className=" w-full flex justify-start">
        <Badge
          content=""
          color={status ? 'success' : 'secondary'}
          shape="circle"
          placement="bottom-right"
        >
          <Avatar
            isBordered
            color={status ? 'success' : 'secondary'}
            radius="full"
            src={photoURL}
          />
        </Badge>
        <div className="grow flex flex-col items-start pl-4">
          <p className="text-base overflow-hidden truncate text-ellipsis">{username}</p>
          <p className="text-sm text-darkSilver">{bio}</p>
        </div>
      </div>
    </Button>
  )
}

ContactCard.propTypes = {
  photoURL: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string,
  id: PropTypes.string,
  status: PropTypes.bool,
}

export default ContactCard;