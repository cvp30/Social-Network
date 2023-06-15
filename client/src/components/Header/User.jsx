import PropTypes from 'prop-types';
import { ArrowDown } from '../../icons';
import UserOptions from './UserOptions';
import { useEffect, useRef, useState } from 'react';

const User = ({ username, img }) => {

  const userOptions = useRef()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const clickOutside = (event) => {
      if (userOptions.current && !userOptions.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  })


  return (
    <div onClick={() => setIsOpen(!isOpen)} ref={userOptions} className="h-12 w-fit relative flex items-center justify-center gap-2">
      <div className='h-full flex justify-center items-center dark:text-white list-none'>
        <img className='h-full aspect-square rounded-full object-cover' src={img} alt="user" />
        <ArrowDown />
      </div>
      <UserOptions username={username} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

User.propTypes = {
  username: PropTypes.string,
  img: PropTypes.string,
}

export default User;