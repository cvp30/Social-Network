import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { Avatar, Badge } from "@nextui-org/react";

const ContactCard = ({ route, image, name, description, state }) => {

  return (
    <Link to={route} className="w-full box-border px-1 py-2 flex gap-2 rounded-lg hover:bg-darkButton hover:text-white">
      <Badge
        content=""
        color={state ? 'success' : 'danger'}
        shape="circle"
        placement="bottom-right"
      >
        <Avatar
          isBordered
          color={state ? 'success' : 'danger'}
          radius="full"
          src={image}
        />
      </Badge>
      <div className="grow">
        <p className="text-base overflow-hidden truncate text-ellipsis">{name}</p>
        <p className="text-sm text-darkSilver">{description}</p>
      </div>
    </Link>
  )
}

ContactCard.propTypes = {
  route: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  state: PropTypes.bool,
}

export default ContactCard;