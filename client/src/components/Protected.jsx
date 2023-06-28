import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom"
import { UserAuth } from '../contexts/AuthenticationContext';
import Loading from "./Loading"

const Protected = ({ children }) => {

  const { user, loading } = UserAuth();


  if (loading) return <Loading />

  if (!user) return <Navigate to="/auth" replace={true} />

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