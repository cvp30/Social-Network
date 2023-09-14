import PropTypes from 'prop-types';


const Modal = ({ children }) => {

  document.body.style.overflow = 'hidden'
  return (
    <div className={`w-screen h-screen fixed overflow-hidden top-0 left-0 z-50 bg-[#212833ce]`}>
      {children}
    </div>
  )
}

Modal.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.any,
}

export default Modal