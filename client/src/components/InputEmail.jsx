import PropTypes from 'prop-types';

const InputEmail = ({ children, ...props }) => {
  return (
    <div className="flex h-12 border border-silver dark:border-darkBorder rounded-xl" >
      <div className="h-full w-[11%] flex justify-center items-center">
        {children}
      </div>

      <input
        placeholder="Your Email"
        type="email"
        name="email"
        pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
        className="w-[89%] p-2 outline-none rounded-xl dark:bg-secondary dark:text-white"
        {...props}
      />
    </div >


  )
}

InputEmail.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any,
}

export default InputEmail;