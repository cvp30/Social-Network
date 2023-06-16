import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom"

// import { useEffect } from "react";
import { UserAuth } from '../contexts/AuthenticationContext';

const Protected = ({ children }) => {

  // const redirect = useNavigate();
  const { user } = UserAuth();

  if (!user) return <Navigate to="/auth" replace={true} />

  // useEffect(() => {
  //   if (user?.email !== null) redirect('/auth')
  // }, [user, redirect])

  // if (user?.email != null) return null;

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