import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const select = useSelector((val)=>val.loginReducer)

    console.log(select);

  return (
    <>
    {select.isLogin ? children : <Navigate to={"/login"}></Navigate>}
    </>
  )
}

export default PrivateRoute
