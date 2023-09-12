"use client"
import React from 'react'
import style from './style.module.css'
import Nav from "@/app/employee/components/Nav/page"
import Hire_steps from "@/app/employee/components/Hire/index"
import Cards from "@/app/employee/components/Cards/index"
import Reviews from "@/app/student/components/Reviews/index"
import Freq from "@/app/employee/components/Freq/index"
import Footer from "@/app/employee/components/Footer/index"
import Text from "@/app/employee/components/Text/index"
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { asynccurrentemployee } from "@/store/Actions/employeeAction"

const homeemployee = () => {

  const { employee, isAuthenticated} = useSelector((state) => state.employeeReducer);
  
   const dispatch = useDispatch();

   const logout = ()=>{
       dispatch(asynclogoutstudent());
   }

   useEffect(()=>{
       dispatch(asynccurrentemployee())
   },[asynccurrentemployee])


  return (
     <>
        <div className={style.main}>
          <Nav employee={employee} isAuthenticated={isAuthenticated} />
          <Text />  
          <Hire_steps />
          <Cards />
          <Reviews />
          <Freq/>
          <Footer />
        </div>
     </>
  )
}

export default homeemployee