import PropTypes from 'prop-types';

const InputButton = ({ children }) => {
  return (
    <button
      className="w-full bg-blue text-white py-3 rounded-lg disabled:bg-[#4e5d78]"
      disabled={false}
    >
      {children}
    </button>
  )
}

InputButton.propTypes = {
  children: PropTypes.any,
}

export default InputButton;