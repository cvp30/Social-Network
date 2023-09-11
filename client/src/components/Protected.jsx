import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom"
import { useProfile } from '../hooks/useProfile';
import Spinner from './Spinner';
// import { UserAuth } from '../contexts/AuthenticationContext';


const Protected = ({ children }) => {

  const { loading } = useProfile();
  // const { token } = UserAuth()
  const sessionToken = localStorage.getItem('Session')

  if (!sessionToken) return <Navigate to="/auth" />
  if (loading) return <Spinner />


  return (
    <>
      {children}
    </>
  )
}

Protected.propTypes = {
  children: PropTypes.any,
}

export default Protected;