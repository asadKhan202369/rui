import React from 'react'
import style from "@/app/student/resume/style.module.css"
import { useState } from 'react'
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai"

const page = (props) => {
  console.log(props,"its props");
  const [student, setstudent] = useState('')
    

  useEffect(() => {
    setstudent(props.student);
  }, [props.student]); 



  return (
    <>
     <div
          className={`${style.edu_form} ${style.edituserform}`}
        
         >
        <div className={style.e_head}>
        <AiOutlineClose className={style.close}  />    
          <h6>Edit Your Profile </h6>
        </div>
        <div className={style.form_div}>

          <form >
            
            <div className={style.name}>
                <div className="mb-3">
                  <label
                    style={{
                      fontFamily: "roobert",
                      fontSize: "1vmax",
                      fontWeight: "550",
                    }}
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    First name
                  </label>
                  <input
                    // value={updateInternData.profile}
                    // onChange={updateEvent}
                    name="name"
                    placeholder="e.g Sales & Marketing"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label
                    style={{
                      fontFamily: "roobert",
                      fontSize: "1vmax",
                      fontWeight: "550",
                    }}
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    Last name(Optional)
                  </label>
                  <input
                    // value={updateInternData.profile}
                    // onChange={updateEvent}
                    name="lastname"
                    placeholder="e.g Sales & Marketing"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
            </div>
            

            
            <div className="mb-3">
              <label
                style={{
                  fontFamily: "roobert",
                  fontSize: "1vmax",
                  fontWeight: "550",
                }}
                htmlFor="exampleInputEmail1"
                className="form-label"
              >
                Email
              </label>
              <input
                // value={updateInternData.location}
                // onChange={updateEvent}
                name="email"
                placeholder="e.g Mumbai"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                style={{
                  fontFamily: "roobert",
                  fontSize: "1vmax",
                  fontWeight: "550",
                }}
                htmlFor="exampleInputEmail1"
                className="form-label"
              >
                Contact number
              </label>
              <input
                // value={updateInternData.organization}
                // onChange={updateEvent}
                name="contact"
                placeholder="e.g Intershala"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          
            <div className="mb-3">
              <label
                style={{
                  fontFamily: "roobert",
                  fontSize: "1vmax",
                  fontWeight: "550",
                }}
                htmlFor="exampleInputEmail1"
                className="form-label"
              >
                Current City
              </label>
              <input
                // value={updateInternData.organization}
                // onChange={updateEvent}
                name="citu"
                placeholder="e.g Intershala"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div style={{ marginTop: "5vh" }} className={style.dates}>
              <div className="form-floating">
                <textarea
                  // value={updateInternData.description}
                  // onChange={updateEvent}
                  name="description"
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px", width: "41vw" }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Description</label>
              </div>
            </div>

            <div className={style.btn}>
              <button
                
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
          </div>


         <div className={style.resume_card}>
            <div className={style.contact}>
              <div className={style.c_left}>
                <div className={style.name}>
                  <h2>{student.name}</h2>
                  <MdOutlineModeEditOutline className={style.edit} />
                </div>
                <h5>Email : {student.email}</h5>
                <h5>City : {student.city}</h5>
                <h5>Contact : +91 {student.contact}</h5>
                <h5>Gender : {student.gender}</h5>
              </div>
              <div className={style.c_right}>
                <div className={style.ruimg}>
                  <img src={props.student.avatar.url} alt="" />
                  
                </div>
                <div className={style.down}>
                  <FiDownload className={style.dn} />
                  <small>Download</small>
                </div>
              </div>
            </div>
          </div>
    
    </>
  )
}

export default page