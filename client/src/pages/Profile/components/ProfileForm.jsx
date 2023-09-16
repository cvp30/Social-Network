import PropTypes from 'prop-types';
import { Close } from '../../../icons';
import InputForm from './InputForm';
import { useProfile } from '../../../hooks/useProfile';
import { useFormik } from "formik"

const ProfileForm = ({ CloseModal }) => {

  const { profile } = useProfile()

  const userFormik = useFormik({
    initialValues: {
      website: profile.website,
      location: profile.location ?? '',
      bio: profile.bio
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div
      className="fixed z-20 top-0 left-0 h-screen w-screen bg-[#13171eee] flex justify-center items-center dark:text-white"
    >
      <section
        className="p-3 flex flex-col gap-2 w-[28rem] h-fit bg-lightWhite dark:bg-principal rounded-lg"
      >
        <header className='w-full h-fit flex justify-between'>
          <p className=' font-semibold'>Edit basic info</p>
          <button
            onClick={CloseModal}
          >
            <Close />
          </button>
        </header>

        <hr className='w-full border' />

        <form
          className='w-full h-fit flex flex-col gap-4'
          onSubmit={userFormik.handleSubmit}
        >
          <InputForm
            label="Website"
            placeholder="Your website"
            name="website"
            value={userFormik.values.website}
            onChange={userFormik.handleChange}
          />

          <InputForm
            label="Location"
            placeholder="Your location"
            name="location"
            value={userFormik.values.location}
            onChange={userFormik.handleChange}
          />

          <InputForm
            label="Bio"
            placeholder="Bio"
            name="bio"
            value={userFormik.values.bio}
            onChange={userFormik.handleChange}
          />

          <div className='w-full h-fit flex justify-center gap-3 font-semibold'>
            <button
              onClick={CloseModal}
              className='w-32 px-3 py-2 bg-white rounded-lg hover:bg-silver dark:bg-secondary dark:hover:bg-darkButton animation'
            >
              Cancel
            </button>

            <button
              className='w-32 px-3 py-2 text-white bg-blue rounded-lg hover:bg-[#29b9f2]  animation'
              type='submit'
            >
              Save
            </button>

          </div>

        </form>

      </section>

    </div>
  )
}

ProfileForm.propTypes = {
  CloseModal: PropTypes.any,
}

export default ProfileForm