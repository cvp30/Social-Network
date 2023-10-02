import { Image } from "@nextui-org/react"
import { useState } from "react"
import PropTypes from 'prop-types'


const PreviewImage = ({ file }) => {
  const [prev, setPrev] = useState({})

  if (file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPrev(reader.result)
    }
  }
  return (
    <Image
      width={370}
      src={prev}
    />
  )
}

PreviewImage.propTypes = {
  file: PropTypes.any,
}

export default PreviewImage