import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

const Protected = ({ children }) => {

  const navigate = useNavigate();
  const { user } = UserAuth();

  useEffect(() => {
    if (user === null) navigate('/')
  }, [user, navigate])

  if (user === null) return null;

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