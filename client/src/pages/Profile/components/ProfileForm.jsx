import PropTypes from 'prop-types';
import { Close } from '../../../icons';

const ProfileForm = ({ CloseModal }) => {
  return (
    <div
      className="fixed z-20 top-0 left-0 h-screen w-screen bg-[#212833ce] flex justify-center items-center"
    >
      <section
        className="p-2 flex flex-col gap-2 w-[28rem] h-fit bg-lightWhite dark:bg-principal"
      >
        <header className='w-full h-fit flex justify-between font-semibold'>
          <p>Edit basic info</p>
          <button
            onClick={CloseModal}
          >
            <Close />
          </button>
        </header>

        <hr className='w-full border' />

        <form
          className='w-full h-fit'
        >
          <label className='font-semibold' htmlFor="website">Website</label>
          <input
            className='w-full bg-white dark:bg-secondary rounded-lg outline-none p-2'
            type="text"
            id='website'
            placeholder='Website'
          />

        </form>

      </section>

    </div>
  )
}

ProfileForm.propTypes = {
  CloseModal: PropTypes.any,
}

export default ProfileForm