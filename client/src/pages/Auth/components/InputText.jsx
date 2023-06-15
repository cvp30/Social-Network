import PropTypes from 'prop-types';
import { UsernameAvatar } from '../../../icons';

const InputText = () => {
  return (
    <div className="flex h-12 border border-silver dark:border-darkBorder rounded-xl" >
      <div className="h-full w-[11%] flex justify-center items-center">
        <UsernameAvatar className="w-6 h-6" />
      </div>

      <input
        type="text"
        name="text"
        placeholder="username"
        className="w-[89%] p-2 outline-none rounded-xl dark:bg-secondary"
        autoComplete='off'
      />
    </div >
  )
}

InputText.propTypes = {
  children: PropTypes.any,
}

export default InputText;