import PropTypes from 'prop-types';
import { UsernameAvatar } from '../../../icons';

const InputUsername = ({ userFormik }) => {

  return (
    <div className="flex h-12 border border-silver dark:border-darkBorder rounded-xl" >
      <div className="h-full w-[11%] flex justify-center items-center">
        <UsernameAvatar className="w-6 h-6" />
      </div>

      <input
        type="text"
        name="username"
        value={userFormik.values.username}
        onChange={userFormik.handleChange}
        onBlur={userFormik.handleBlur}
        placeholder="username"
        className="w-[89%] p-2 outline-none rounded-xl dark:bg-secondary"
        autoComplete='off'
      />
    </div >
  )
}

InputUsername.propTypes = {
  children: PropTypes.any,
  userFormik: PropTypes.any,
}

export default InputUsername;