import PropTypes from 'prop-types';

const InputButton = ({ children }) => {
  return (
    <button
      type='submit'
      className="w-full bg-blue text-white py-3 font-bold rounded-lg"
      disabled={false}
    >
      {children}
    </button>
  )
}

InputButton.propTypes = {
  children: PropTypes.string,
}

export default InputButton;