import PropTypes from 'prop-types';

const Button = ({ icon, value, color, className }) => {
  return (
    <button className={`flex gap-2 py-2 px-3 font-medium rounded-lg bg-${color} ${className} dark:bg-secondary dark:text-white`}>
      {icon}
      {value}
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.element,
  value: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

export default Button