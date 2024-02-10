import { useState } from "react"
import PropTypes from 'prop-types'


const ImagePreview = ({ file }) => {
  const [prev, setPrev] = useState({})

  if (file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPrev(reader.result)
    }
  }
  return (
    <img className="rounded-xl" src={prev} alt="" />
  )
}

ImagePreview.propTypes = {
  file: PropTypes.any,
}

export default ImagePreview