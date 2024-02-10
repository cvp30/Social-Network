import PropTypes from 'prop-types'
import { createContext, useContext } from "react";
import { useUser } from '../../../hooks/useUser';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { UPDATE_PROFILE_DATA } from '../graphql/UpdateBasicDataMutation';
import { GET_PROFILE } from '../../../graphql/GetProfileQuery';
import { uploadImage } from '../../../services/firebase';

const UpdateProfileContext = createContext()

export const UpdateProfileContextProvider = ({ children }) => {

  const { profile } = useUser()

  const [updateProfileData, { loading }] = useMutation(UPDATE_PROFILE_DATA, {
    onCompleted: () => {
      // alert("first")
    },
    refetchQueries: [
      { query: GET_PROFILE },
    ]
  })

  const initialValues = {
    photoURL: profile.photoURL ?? '',
    coverPhoto: profile.coverPhoto ?? '',
    username: profile.username,
    portfolio: profile.portfolio ?? '',
    github: profile.github ?? '',
    linkedin: profile.linkedin ?? '',
    location: profile.location ?? '',
    bio: profile.bio
  }

  const userFormik = useFormik({
    initialValues: initialValues,
    onSubmit: async values => {
      try {
        const uploadCoverPromise = values.coverPhoto && values.coverPhoto !== initialValues.coverPhoto ? uploadImage(profile?.id, values.coverPhoto) : Promise.resolve(null)

        const uploadProfilePromise = values.photoURL && values.photoURL !== initialValues.photoURL ? uploadImage(profile?.id, values.photoURL) : Promise.resolve(null)

        const [coverResult, profileResult] = await Promise.all([uploadCoverPromise, uploadProfilePromise])

        let input = {}

        if (coverResult) input.coverPhoto = coverResult
        if (profileResult) input.photoURL = profileResult


        if (values.username !== initialValues.username) input.username = values.username

        if (values.portfolio !== initialValues.portfolio) input.portfolio = values.portfolio

        if (values.github !== initialValues.github) input.github = values.github

        if (values.linkedin !== initialValues.linkedin) input.linkedin = values.linkedin

        if (values.location !== initialValues.location) input.location = values.location

        if (values.bio !== initialValues.bio) input.bio = values.bio

        await updateProfileData({ variables: { input } })

      } catch (error) {
        console.log(error)
      }
    }
  })

  const hasChanges = Object.keys(userFormik.values).some(
    (key) => userFormik.values[key] !== userFormik.initialValues[key]
  )

  const handleChangeCoverPhoto = (e) => {
    // console.log(userFormik.values.coverPhoto)
    if (e.target.files[0]) userFormik.setFieldValue('coverPhoto', e.target.files[0])
  }

  const handleChangeProfilePhoto = (e) => {
    if (e.target.files[0]) userFormik.setFieldValue('photoURL', e.target.files[0])
  }

  const deletePrevProfileImage = () => {
    userFormik.setFieldValue('photoURL', initialValues.photoURL)
  }

  const deletePrevCoverImage = () => {
    userFormik.setFieldValue('coverPhoto', initialValues.coverPhoto)
  }

  return (
    <UpdateProfileContext.Provider value={{
      loading,
      userFormik,
      hasChanges,
      handleChangeCoverPhoto,
      deletePrevProfileImage,
      handleChangeProfilePhoto,
      deletePrevCoverImage
    }}>
      {children}
    </UpdateProfileContext.Provider>
  )
}

export const UpdateContext = () => {
  return useContext(UpdateProfileContext)
}

UpdateProfileContextProvider.propTypes = {
  children: PropTypes.element,
}