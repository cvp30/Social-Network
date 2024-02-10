import { useState } from "react"


export const useImagePreview = (file) => {
  const [preview, setPreview] = useState(null)

  if (file && typeof file !== 'string') {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreview(reader.result)
    }
  }

  return preview
}