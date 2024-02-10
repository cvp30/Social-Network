import { User } from "@nextui-org/react"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const EventCard = ({ title, description, image, members }) => {
  return (
    <article className="h-fit bg-secondary rounded-xl flex flex-col gap-4 p-2">
      <Link to="">
        <User
          name={(
            <p className="text-lg font-semibold line-clamp-1">
              {title}
            </p>
          )}
          description={(
            <p className="line-clamp-1 text-sm text-darkSilver">{description}</p>
          )}
          avatarProps={{
            src: `${image}`,
            radius: "sm",
          }}
          classNames={{
            wrapper: "w-[80%]",
          }}
        />
      </Link>

      <hr className="w-full border border-darkSilver" />

      <a href="" className="w-fit text-sm text-primary font-semibold">{members} Members</a>

    </article>
  )
}

EventCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  members: PropTypes.number,
}

export default EventCard