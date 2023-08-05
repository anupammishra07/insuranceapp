import React from 'react'
import { FC } from "react";
import { Navigate } from "react-router-dom";
// import { store } from "..";
interface Props  {
    component: any;
}

const privateRoutes : FC<Props>  = (component: Props) => {
    // const isAuthenticated = store.getState().loginReducer.authtoken;
    // if (isAuthenticated) return <Component />;
    return <Navigate to="/login" />;
}

export default privateRoutes