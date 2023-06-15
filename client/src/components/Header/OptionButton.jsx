import PropTypes from 'prop-types';


const OptionButton = ({ children, ...props }) => {
  return (
    <button
      className='w-full flex justify-start items-center gap-2 hover:bg-darkButton hover:text-white p-2 rounded-lg'
      {...props}
    >
      {children}
    </button>
  )
}

OptionButton.propTypes = {
  children: PropTypes.any,
}

export default OptionButton;