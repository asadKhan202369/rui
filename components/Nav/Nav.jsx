"use client"
import React, { useEffect } from "react";
import style from "./style.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import employeeReducer from "@/store/Reducers/employeeReducer";
import { asynclogoutemployee } from "@/store/Actions/employeeAction"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { MdClose } from "react-icons/md"
import { asynclogoutstudent } from "@/store/Actions/studentActions";

const employeeNav = ({student , isAuthenticated}) => {
  const dispatch = useDispatch();
  const [showhover, setshowhover] = useState(true)
  const [showloc, setshowloc] = useState(false)

  const logout = ()=>{
    dispatch(asynclogoutstudent());
 }


 
  return (
    <>

      <div className={style.nav}>
              <div className={style.logo}>
              <div className={style.img}>
              <img
                     src="https://ik.imagekit.io/sheryians/Sheryians_Logo_wFKd9VClG.png"
                     alt=""
              />
              </div>
                <div className={style.line}></div>
                <h6>Sheryians Coding School</h6>
              </div>
              
              {student ? (
                 <div className={style.user_div}>
                    <h3>Jobs</h3>
                    <h3>Internships</h3>
                    <h3>Courses</h3>
                    <h6>Heyy, &nbsp;{student.name}</h6>
                     {showhover && (
                        <div className={style.hover_card}>
                          <h4>{student.name}</h4>
                          <Link style={{textDecoration:"none"}} href="/student/profile"><h6>My Account</h6></Link>
                          <h6 onClick={logout}>log out</h6>
                        </div>
                     )}
                 </div>
              ) : (
                <Link href="/student/login">
                    <h5>Sign Up</h5>
                </Link>
              )} 
      </div>
    </>
  );
};

export default employeeNav;
