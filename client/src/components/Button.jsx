import PropTypes from 'prop-types';


const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-fit bg-blue hover:bg-[#53a8b6] text-lightWhite px-4 py-2 rounded-md transition-all duration-150 ease-in-out"
    >
      {value}
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button