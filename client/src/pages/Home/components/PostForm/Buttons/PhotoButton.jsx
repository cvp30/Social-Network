import PropTypes from 'prop-types';
import { Button } from "@nextui-org/react"
import { useRef } from 'react';
import { Photo } from '../../../../../icons';
import { PostContext } from '../../../../../contexts/PostFormContext';


const PhotoButton = ({ isIcon }) => {

  const { postFormik } = PostContext()
  const fileInputRef = useRef(null)

  const handleOpenFile = () => {
    fileInputRef.current.click()
  }

  const handleChangeFile = (e) => {
    const { files } = e.target

    if (files.length) {
      const values = Object.values(files)
      postFormik.setFieldValue('image', [...postFormik.values.image, ...values])
    }
  }

  return (
    <>
      <Button
        size="lg"
        radius="sm"
        startContent={<Photo />}
        isIconOnly={isIcon}
        className="flex text-base"
        onClick={handleOpenFile}
      >
        {isIcon ? '' : 'Photo'}
      </Button>

      <input
        type="file"
        name="image"
        className='hidden'
        ref={fileInputRef}
        onChange={handleChangeFile}
        multiple
        accept='image/*'
      />
    </>
  )
}

PhotoButton.propTypes = {
  isIcon: PropTypes.bool,
}

export default PhotoButton