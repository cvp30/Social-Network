import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom"
import { UserAuth } from '../contexts/AuthenticationContext';
import Loading from "./Loading"

const Protected = ({ children }) => {

  const userAuth = UserAuth();

  if (userAuth?.loading) return <Loading />

  if (!userAuth?.user.state) return <Navigate to="/auth" replace={true} />

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