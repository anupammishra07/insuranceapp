import React from "react";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../redux/store";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
interface PropType {
  component: any;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const isLocalStorageToken = localStorage.getItem("Token");
  console.log(isLocalStorageToken)
  const isAuthenticated =store.getState().login.token;
  console.log(isAuthenticated)
  const token = useSelector((state: RootState) => state.login.token);
  console.log(token)
  if (isLocalStorageToken !== null) return <Component />;
  localStorage.removeItem("Token");
    
  return <Navigate to="/login" />;
};

export default PrivateRoute;
