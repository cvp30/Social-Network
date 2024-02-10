import PropTypes from 'prop-types';
import { Button, Divider, Input, ModalBody, ModalHeader } from '@nextui-org/react';
import ImagesForm from './ImagesForm';
import { UpdateContext } from '../../contexts/UpdateProfileContext';

const UpdateDataForm = ({ onClose }) => {

  const { userFormik, loading, hasChanges } = UpdateContext()

  return (
    <>
      <ModalHeader className='w-full h-fit flex justify-between'>
        <p className=' font-semibold'>Edit basic info</p>
      </ModalHeader>

      <Divider />

      <ModalBody>
        <form
          className='w-full h-fit flex flex-col gap-12'
          onSubmit={hasChanges ? userFormik.handleSubmit : e => e.preventDefault()}
        >
          <ImagesForm />

          <div className='w-full md:flex flex-col gap-5 justify-center'>
            <Input
              size="lg"
              autoComplete='off'
              name='username'
              variant='bordered'
              label='Username'
              value={userFormik.values.username}
              onChange={userFormik.handleChange}
              classNames={{
                inputWrapper: "border-secondary",
                input: "rounded-r-xl",
              }}
            />
            <Input
              size="lg"
              autoComplete='off'
              name='portfolio'
              variant='bordered'
              label='Portfolio'
              value={userFormik.values.portfolio}
              onChange={userFormik.handleChange}
              classNames={{
                inputWrapper: "border-secondary",
                input: "rounded-r-xl"
              }}
            />
            <Input
              size="lg"
              autoComplete='off'
              name='linkedin'
              variant='bordered'
              label='Linkedin'
              value={userFormik.values.linkedin}
              onChange={userFormik.handleChange}
              classNames={{
                inputWrapper: "border-secondary",
                input: "rounded-r-xl"
              }}
            />
            <Input
              size="lg"
              autoComplete='off'
              name='github'
              variant='bordered'
              label='Github'
              value={userFormik.values.github}
              onChange={userFormik.handleChange}
              classNames={{
                inputWrapper: "border-secondary",
                input: "rounded-r-xl"
              }}
            />

            <Input
              size="lg"
              autoComplete='off'
              name='location'
              variant='bordered'
              label='Location'
              value={userFormik.values.location}
              onChange={userFormik.handleChange}
              classNames={{
                inputWrapper: "border-secondary",
                input: "rounded-r-xl"
              }}
            />

            <Input
              size="lg"
              autoComplete='off'
              name='bio'
              variant='bordered'
              label='Bio'
              value={userFormik.values.bio}
              onChange={userFormik.handleChange}
              classNames={{
                inputWrapper: "border-secondary",
                input: "rounded-r-xl"
              }}
            />
          </div>


          <div className='w-full h-fit flex justify-around gap-3 font-semibold'>
            <Button
              onPress={onClose}
              size='lg'
              color='danger'
            >
              Cancel
            </Button>

            <Button
              type='submit'
              isDisabled={loading}
              onPress={onClose}
              size='lg'
              color='primary'
              variant='ghost'
            >
              Save
            </Button>
          </div>
        </form>
      </ModalBody>
    </>
  )
}

UpdateDataForm.propTypes = {
  onClose: PropTypes.any,
}

export default UpdateDataForm