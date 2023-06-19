import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


const ContactCard = ({ route, image, name, state }) => {

  return (
    <Link
      to={route}
      className="w-full h-12 flex items-center justify-between hover:bg-darkButton hover:text-white rounded-lg py-2 px-4"
    >
      <div className="h-full w-[75%] flex items-center gap-2">
        <img src={image} className="h-full aspect-square rounded-full" />

        <p
          className="dark:text-lightWhite overflow-hidden truncate text-ellipsis"
        >
          {name}
        </p>

      </div>

      <span className={`${state ? 'bg-[#16FF00]' : 'bg-[red]'} h-2 aspect-square rounded-full`}></span>

    </Link>
  )
}

ContactCard.propTypes = {
  route: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.bool,
}

export default ContactCard;