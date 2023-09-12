"use client"
import React, { useEffect } from 'react'
import style from "./style.module.css"
import Nav from '@/components/Nav/Nav'
import Mainlogin from '@/components/Home/Main/index'
import Pcourses from '@/components/Home/Pcourses/index'
import Reviews from '@/app/student/components/Reviews'
import Jobs from '@/components/Home/Jobs/index'
import { asynclogoutstudent,asynccurrentstudent } from "@/store/Actions/studentActions"
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const homepage = () => {
    const router = useRouter();
   const { student, isAuthenticated,alljobs } = useSelector((state) => state.studentReducers);
   

  //  useEffect(()=>{
  //       if(isAuthenticated){
  //           router.push('/student/home')
  //       }else{
  //           router.push('/student/login')
  //       }
  //  },[isAuthenticated])

   const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(asynccurrentstudent())
    },[asynccurrentstudent])



  return (
    <>

         <Nav student={student} isAuthenticated={isAuthenticated} />


                {student && (
                      <Nav student={student} isAuthenticated={isAuthenticated} />
                 )}
       <Mainlogin student={student} isAuthenticated={isAuthenticated} />
       <Jobs />
       <Pcourses />
       <Reviews />
    </>
  )
}

export default homepage