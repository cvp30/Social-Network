import PropTypes from 'prop-types';
import { Button } from "@nextui-org/react"
import { Photo } from "../../../icons"
import { useRef } from 'react';
import { PostContext } from '../../../contexts/PostFormContext';


const PhotoButton = ({ isIcon }) => {

  const { postFormik } = PostContext()
  const fileInputRef = useRef(null)

  const handleOpenFile = () => {
    fileInputRef.current.click()
  }

  const handleChangeFile = (e) => {
    postFormik.setFieldValue('image', e.target.files[0])
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
        // multiple
        accept='image/*'
      />
    </>
  )
}

PhotoButton.propTypes = {
  isIcon: PropTypes.bool,
}

export default PhotoButton