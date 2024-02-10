import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { PostFormSchema } from '../schemas/PostFormSchema'
import { useMutation } from '@apollo/client'
import { CREATE_POST } from '../graphql/CreatePost'
import { GET_ALL_POSTS } from '../graphql/GetAllPosts'
import { uploadImage } from '../services/firebase'
import { useUser } from '../hooks/useUser'

const PostFormContext = createContext()

export const PostFormContextProvider = ({ children }) => {

  const { profile } = useUser()

  const [RegisterPost] = useMutation(CREATE_POST, {
    onError: (error) => {
      alert(error.message)
    },
    refetchQueries: [
      { query: GET_ALL_POSTS }
    ]
  })
  const [isIcon, setIsIcon] = useState(false)

  const initialValues = {
    content: '',
    image: [],
    privacy: 'PUBLIC',
  }

  const postFormik = useFormik({
    initialValues,
    // validationSchema: PostFormSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values.image)
      // let input = {}
      // if (values.content.trim().length) input.content = values.content

      // if (values.image.length !== 0) {
      //   try {
      //     const image = values.image

      //     const photoURL = await uploadImage(profile?.id, image)

      //     input = { ...input, image: photoURL }

      //   } catch (error) {
      //     console.log(error)
      //   }
      // }

      // input = { ...input, privacy: values.privacy }
      // RegisterPost({ variables: input })
      // resetForm()
    }
  })

  useEffect(() => {
    const handleResize = () => {
      const isSmScreen = window.innerWidth <= 640;
      setIsIcon(isSmScreen);
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <PostFormContext.Provider value={{
      postFormik,
      isIcon,
    }}>
      {children}
    </PostFormContext.Provider>
  )
}

PostFormContextProvider.propTypes = {
  children: PropTypes.element,
}

export const PostContext = () => {
  return useContext(PostFormContext)
}