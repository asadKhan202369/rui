"use client"
import React, { useEffect ,useState} from 'react'
import Jobs from "@/app/employee/profile/applicant/components/Jobs/page"
import Education from "@/app/employee/profile/applicant/components/Education/page"
import Internships from "@/app/employee/profile/applicant/components/Internships/page"
import Training from "@/app/employee/profile/applicant/components/Training/page"
import Nav from '@/components/Nav/Nav'
import Skills from "@/app/employee/profile/applicant/components/Skills/page"
import Accomplishment from "@/app/employee/profile/applicant/components/Accomplishment/page"
import Responsibility from "@/app/employee/profile/applicant/components/Responsibility/page"
import Portfoliow from "@/app/employee/profile/applicant/components/Portfoliow/page"
import Projects from "@/app/employee/profile/applicant/components/Projects/page"
import Details from "@/app/employee/profile/applicant/components/Details/page"
import { PiWarningCircleBold } from "react-icons/pi";
import { asyncgetresume } from "@/store/Actions/studentActions"
import { useSelector,useDispatch } from 'react-redux'
import style from "./style.module.css"
import { useRouter } from 'next/navigation'
import  { asynccurrentemployee } from "@/store/Actions/employeeAction"
import { asyncfindresume } from "@/store/Actions/studentActions"

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();


  const { student, isAuthenticated } = useSelector(
    (state) => state.studentReducers
  );
  const { employee } = useSelector(
    (state) => state.employeeReducer
  );


  console.log(student,"its student");
  console.log(isAuthenticated,"its student");
  console.log(employee,"its employee");

  useEffect(()=>{

    // This code will run when the component mounts
    const timeoutId = setTimeout(() => {
      const url = window.location.href;
      console.log(url,":");
      const parts = url.split("/"); 
      const id = parts[parts.length - 1];
      console.log(id,"ots [arahaa id");
       dispatch(asyncfindresume(id));
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
    

  },[])
 
  useEffect(() => {
    dispatch(asynccurrentemployee());
  }, [asynccurrentemployee]);
 
  const resdets = (id) => {
    dispatch(asyncfindresume(id));
  };

  return (
    <>
       <div className={style.main}>
       <Nav student={student} isAuthenticated={isAuthenticated} />
            <div className={style.head}>
              <h3>Resume</h3>
            </div>
            <div className={style.wrn}>
              <PiWarningCircleBold className={style.wrni} />
              <p>
                Whenever you apply to an internship or fresher job, this is the
                resume that the employer will see. Always make sure it is up to
                date.
              </p>
            </div>
            
              <div className={style.resume_container}>

                  {student && student.resume && (
                      <Details student={student} />
                  )}
                  {student && student.resume && (
                      <Education education={student.resume.education} />
                  )}
                  {student && student.resume && (
                      <Jobs jobs={student.resume.jobs} />
                  )}

                  {student && student.resume && (
                       <Internships internship={student.resume.internship}  />
                  )}

                  {student && student.resume && (
                       <Responsibility responsibilities={student.resume.responsibilities}  />
                  )}  
                   {student && student.resume && (
                      <Training train={student.resume.train}  />
                   )}  
                   {student && student.resume && (
                      <Projects projects={student.resume.projects}  />
                   )}        
                    {student && student.resume && (
                      <Skills skills={student.resume.skills}  />
                   )}  
                    
                    {student && student.resume && (
                      <Portfoliow  link={student.resume.portfolio}/>
                     )} 
                      {student && student.resume && (
                      <Accomplishment  achive={student.resume.accomplishments}/>
                     )} 
              </div>
          
       </div>    
    </>
  )
}

export default page