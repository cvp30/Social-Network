import PropTypes from 'prop-types';

const InputText = ({ placeholder, children }) => {
  return (
    <div className="flex h-12 border border-silver dark:border-darkBorder rounded-xl" >
      <div className="h-full w-[11%] flex justify-center items-center">
        {children}
      </div>

      <input
        type="text"
        name="text"
        placeholder={placeholder}
        className="w-[89%] p-2 outline-none rounded-xl dark:bg-secondary"
        autoComplete='off'
      />
    </div >


  )
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.any,
}

export default InputText;