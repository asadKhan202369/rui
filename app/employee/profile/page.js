"use client"
import React from 'react'
import style from './style.module.css'
import Nav from "@/app/employee/components/Nav/page"
import { useEffect } from 'react'
import { asynccurrentemployee } from "@/store/Actions/employeeAction"
import { BiSolidPencil } from "react-icons/bi"
import { useDispatch,useSelector } from 'react-redux'
import Link from 'next/link'
import { useState } from 'react'
import { asyncupdatedetails } from "@/store/Actions/employeeAction"



const profile = () => {
  const { employee, isAuthenticated} = useSelector((state) => state.employeeReducer); 


  const initialformData = {
    name: "",
    lastname: "",
    email: "",
    organisationname: "",
    organisationlocation: "",
    contact: "",
  };

  const [formData, setformData] = useState(initialformData)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asynccurrentemployee());
  },[])

  useEffect(() => {
    if (employee) {
      setformData(employee);
    }
  }, [employee]);


  const updateEvent= (event)=>{
    const {name, value} = event.target;

    setformData((preData)=>{
        return {
            ...preData,
            [name]:value,
        }
    })
  }

  const updateDetails =async (e)=>{
       event.preventDefault();
      await dispatch(asyncupdatedetails(formData));
    dispatch(asynccurrentemployee());
  }

  return (
   

    <>
      {employee ? (
        <div className={style.main}>
          <Nav employee={employee} isAuthenticated={isAuthenticated} />
           <div className={style.center}>
              <div className={style.left_panel}>
                   <div className={style.user}>
                        <div className={style.user_img}>
                            <img src="https://lh3.googleusercontent.com/a/AAcHTtdkSuaYcoE6NEH6KQ2zp4eKp1a7WgI4ftMyzqie2wTF7w=s96-c" alt="" />
                             <div className={style.user_edit_btn}>
                                 <button>
                                    <BiSolidPencil />
                                 </button>
                             </div>
                        </div>
                       <h6>Arbaz khan</h6>
                   </div>
                   <div className={style.user_options}>
                       <h3>
                          <div className={`${style.leftline} ${style.leftline1}`}></div>
                          My Profile
                       </h3>
                       <Link style={{textDecoration:"none",width:"100%"}} href="/employee/profile/myjobs">
                          <h3>
                              <div className={style.leftline}></div>
                              My Jobs
                          </h3>
                       </Link>
                       
                       <h3>
                          <div className={style.leftline}></div>
                          My Internships
                       </h3>
                       <Link style={{textDecoration:"none",width:"100%"}} href="/employee/profile/applicant">
                          <h3>
                              <div className={style.leftline}></div>
                               Applicants
                          </h3>
                       </Link>
                       <h3>
                          <div className={style.leftline}></div>
                           Log out
                       </h3>
                       
                   </div>
              </div>
              <div className={style.right_panel}>
                  <div className={style.faram1}>
                        <h1>Welcome, <span>
                                {employee.name}</span>.
                        </h1>
                        <h3>Account Details</h3>
                        <form className={style.form} onSubmit={updateDetails} >
                            <div className={style.firstName}>
                              {employee && (
                                  <input name="name" id="firstNameInput" type="text" placeholder="first Name" onChange={updateEvent} value={formData.name  || ''} />
                               )}
                              {employee && (
                                  <input name="lastname" id="firstNameInput5" type="text" placeholder="last Name" onChange={updateEvent} value={formData.lastname  || ''}  />
                               )}
                            </div>
                            <div className={style.firstEmail}>
                               {employee && (
                                 <input name="organisationname" id="firstNameInput1" type="text" placeholder="Organization name" onChange={updateEvent} value={formData.organisationname  || ''} />
                               )}
                            
                            </div>
                            <div className={style.firstEmail}>
                               {employee && (
                                 <input name="organisationlocation" id="firstNameInput2" type="text" placeholder="Organization location" onChange={updateEvent} value={formData.organisationlocation  || ''} />
                               )}
                            </div>
                            <div className={style.firstEmail}>
                                {employee && (
                                  <input name="email" id="firstNameInput3" type="email" placeholder="Organization Email" onChange={updateEvent} value={formData.email  || ''} />
                                )}
                            </div>
                            <div className={style.firstName}>
                                {employee && (
                                     <input name="contact" id="firstNameInput4" type="text" placeholder="Contact No.(Whatsapp)" onChange={updateEvent} value={formData.contact  || ''} />
                                )}
                              <div className={style.btns}>
                                  <button className={style.save} type="submit" >Save</button>
                                  <button type='submit' id="cancelbtn" onClick={updateDetails}>Cancel</button>
                                </div>
                            </div>
                        </form>
                        
                  </div>
              </div> 
           </div>
       </div>
      ):(
         <h1>
            hello
         </h1>
      )}
       
    </>
  )
}

export default profile