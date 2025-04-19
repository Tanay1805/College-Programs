import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Auth(props) {


    let naviage = useNavigate();
    let sayItInfo = localStorage.getItem("sayit-info")

    return sayItInfo!== null ? props.children : <Navigate to="/login"/>;
}

export default Auth