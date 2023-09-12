"use client"
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
const profile = () => {
    const { student, isAuthenticated} = useSelector((state) => state.studentReducers); 
  
  return (
    <div>profile</div>
  )
}

export default profile