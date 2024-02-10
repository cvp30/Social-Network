import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom"
import { useUser } from '../hooks/useUser';
import Spinner from './Spinner';
// import { UserAuth } from '../contexts/AuthenticationContext';


const Protected = ({ children }) => {

  const { loading } = useUser();
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