import PropTypes from 'prop-types';
import { useState } from 'react';

const Modal = ({ text }) => {

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='w-full h-fit'>
      <p className={`${isVisible ? 'line-clamp-3' : 'line-clamp-0'} dark:text-white`}>
        {text}
      </p>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="font-bold text-sm"
      >
        {
          isVisible ?
            'See more'
            :
            'See less'
        }
      </button>
    </div>
  )
}

Modal.propTypes = {
  text: PropTypes.string,
}

export default Modal;