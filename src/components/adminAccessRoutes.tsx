import React from 'react'
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../redux/store";


interface PropType {
    component: any;
  }

const AdminAccessRoutes :FC<PropType>= ({ component: Component }) => {
    const isAuthenticated = localStorage.getItem("Token");
    const role = localStorage.getItem("role");
    if (isAuthenticated && role == "admin") return <Component />;
    localStorage.removeItem("Token");
    localStorage.removeItem("role");
  return  <Navigate to="/login" />;
}

export default AdminAccessRoutes