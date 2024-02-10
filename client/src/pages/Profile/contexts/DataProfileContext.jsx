import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types'
import { createContext, useContext } from "react";
import { GET_USER_DATA } from '../graphql/GetUserQuery';
import { useUser } from '../../../hooks/useUser';

const DataProfileContext = createContext()

export const DataProfileContextProvider = ({ slug, children }) => {

  const { profile: profileLoggedIn, loading: loadingProfileLoggedIn } = useUser()

  const isSlugLoggedIn = profileLoggedIn.slug === slug

  const { data: profileVisited, loading: loadingProfileVisited } = useQuery(GET_USER_DATA, {
    variables: { slug },
    skip: isSlugLoggedIn,
  })


  return (
    <DataProfileContext.Provider value={{
      profile: isSlugLoggedIn ? profileLoggedIn : profileVisited?.GetUser,
      loading: isSlugLoggedIn ? loadingProfileLoggedIn : loadingProfileVisited,
      isCurrentUser: isSlugLoggedIn
    }}>
      {children}
    </DataProfileContext.Provider>
  )
}

export const DataProfile = () => {
  return useContext(DataProfileContext)
}

DataProfileContextProvider.propTypes = {
  children: PropTypes.element,
  slug: PropTypes.string,
}