import PropTypes from 'prop-types';
import { useNavigate, Navigate } from "react-router-dom"
import { UserAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

const Protected = ({ children }) => {

  const redirect = useNavigate();
  const { user } = UserAuth();

  useEffect(() => {
    if (!Object.keys(user).length) redirect('/auth')
  }, [user, redirect])

  if (!Object.keys(user).length) return <Navigate to="/auth" replace={true} />;

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