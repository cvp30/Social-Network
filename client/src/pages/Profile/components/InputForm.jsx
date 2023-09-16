import PropTypes from 'prop-types';
import { useId } from 'react';


const InputForm = ({ label, placeholder, name, value, onChange }) => {

  const id = useId()

  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <label className='font-medium' htmlFor={id}>{label}</label>
      <input
        className='w-full bg-white dark:bg-secondary rounded-lg outline-none p-2'
        name={name}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

InputForm.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputForm