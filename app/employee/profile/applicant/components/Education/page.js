"use client";
import axios from "@/utils/axios";
import { useEffect, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus,AiOutlineClose } from "react-icons/ai";
import React from 'react'
import style from "@/app/student/resume/style.module.css"

const page = (props) => {
  // console.log(props,"its edu");
    const [educationr, setEducationr] = useState([]);  
    const [currentedu, setcurrentedu] = useState({}) 
    const [showcardopt, setshowcardopt] = useState(false)
    const [Grad, setGrad] = useState(false)
    const [Hsec, setHsec] = useState(false)
    const [sec, setsec] = useState(false)
    const [dip, setdip] = useState(false)
    const [showcard, setshowcard] = useState(false)

    useEffect(() => {
        setEducationr(props.education);
    },[props.education]);


    const closecard = ()=>{
       setshowcard(!showcard)
    }
      
    const initialFormData = {
        collagename: "",
        startYear: "",
        endYear: "",
        Degree: "",
        Stream: "",
        PScale: "",
        Perform: "",
        persuing:"",
        yearofcomp:"",
        board:"",

        // Add more fields as needed
    };
    

    const [formData, setformData] = useState(initialFormData);
    const [updateData, setUpdateData] = useState({
          collagename: "",
          startYear: "",
          endYear: "",
          Degree: "",
          Stream: "",
          PScale: "",
          Perform: "",
          persuing:"",
          yearofcomp:"",
          board:"",
          id:""
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setformData((preData) => {
        return {
            ...preData,
            [name]: value,
        };
        });
    };

    const updateEvent = (event) => {
        const { name, value } = event.target;
        setUpdateData((preData) => {
        return {
            ...preData,
            [name]: value,
        };
        });
    };

    const Gradform = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post("/resume/education", formData);
          setformData(initialFormData); // Reset form fields
        } catch (error) {
          console.log(error);
        }
    };

    const resetUpdateData = () => {
        setUpdateData({
            collagename: "",
            startYear: "",
            endYear: "",
            Degree: "",
            Stream: "",
            PScale: "",
            Perform: "",
            id:""
        });
      };

    const updateGrad = async (id) => {
        try {
            event.preventDefault();
          const { data } = await axios.post(`/resume/edit-edu/${id}`, updateData);
          resetUpdateData();
        } catch (error) {
          console.log(error);
        }
    };

    const deleteGrad = async (id) => {
        try {
            // event.preventDefault();
          const { data } = await axios.post(`/resume/delete-edu/${id}`);
          console.log("deleted succesfully");
        } catch (error) {
          console.log(error);
        }
    };

    const findeducation = async (id) => {
        try {
          const { data } = await axios.get(`/resume/finde/${id}`);
          const { education, eduIndex } = data;
           setcurrentedu(education)
            const updateformData = {
                collagename:education.collagename,
                startYear:education.startYear,
                endYear :education.endYear,
                Degree: education.Degree,
                Stream : education.Stream,
                PScale : education.PScale,
                Perform:education.Perform,
                id:education.id
            }
            setUpdateData(updateformData)
            
        } catch (error) {
          console.log(error);
        }
    };
    
  return (
    <>
    
      {/* ------------ add Gradution --------------------- */}

      {Grad && (
          <div style={{ display: "initial" }} className={style.edu_form}>
          <div className={style.e_head}>
             <AiOutlineClose className={style.close} onClick={closecard} />    
            <h6>Graduation details/ Post graduation details</h6>
          </div>
          <div className={style.form_div}>
            <form onSubmit={Gradform}>
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
                  College
                </label>
                <input
                  value={formData.collagename}
                  onChange={inputEvent}
                  name="collagename"
                  placeholder="e.g College Name"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className={style.dates}>
                <div className={style.select}>
                  <label
                    style={{
                      fontFamily: "roobert",
                      fontSize: "1vmax",
                      fontWeight: "550",
                    }}
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    Start year
                  </label>
                  <select
                    value={formData.startYear}
                    onChange={inputEvent}
                    name="startYear"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="choose Year">Choose Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                  </select>
                </div>
                <div className={style.select}>
                  <label
                    style={{
                      fontFamily: "roobert",
                      fontSize: "1vmax",
                      fontWeight: "550",
                    }}
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    End year
                  </label>
                  <select
                    value={formData.endYear}
                    onChange={inputEvent}
                    name="endYear"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Choose Year">Choose Year</option>
                    <option value="2029">2029</option>
                    <option value="2028">2028</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                  </select>
                </div>
              </div>
              <div className={style.dates}>
                <div className={style.select}>
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
                      Degree
                    </label>
                    <input
                      value={formData.Degree}
                      onChange={inputEvent}
                      name="Degree"
                      placeholder="e.g B.Sc (Hons.)"
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div className={style.select}>
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
                      Stream(Optional)
                    </label>
                    <input
                      value={formData.Stream}
                      onChange={inputEvent}
                      name="Stream"
                      placeholder="e.g Economics"
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>

              <div className={style.popup}>
                <h6>
                  Example: If your degree is B.Sc in Chemistry, then select
                  Bachelor of Science (B.Sc) in <span>degree</span> and{" "}
                  <span>Chemistry</span> in streams.
                </h6>
                <h6>
                  If you can't find your degree, check for typos or different ways
                  of writing your degree or choose from the closest available.
                  Write to <span>support@internshala.com</span> if you are
                  pursuing a degree not available in the list.
                </h6>
              </div>

              <div className={style.dates}>
                <div className={style.select}>
                  <label
                    style={{
                      fontFamily: "roobert",
                      fontSize: "1vmax",
                      fontWeight: "550",
                    }}
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    Performance Scale (Optional)
                  </label>
                  <select
                    value={formData.PScale}
                    onChange={inputEvent}
                    name="PScale"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="CGPA (Scale of 10)">CGPA (Scale of 10)</option>
                    <option value="CGPA (Scale of 9)">CGPA (Scale of 9)</option>
                    <option value="CGPA (Scale of 8)">CGPA (Scale of 8)</option>
                    <option value="CGPA (Scale of 7)">CGPA (Scale of 7)</option>
                    <option value="CGPA (Scale of 5)">CGPA (Scale of 5)</option>
                    <option value="CGPA (Scale of 4)">CGPA (Scale of 4)</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div style={{ marginTop: ".9vmax" }} className={style.select}>
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
                      Performance (Optional)
                    </label>
                    <input
                      value={formData.Perform}
                      onChange={inputEvent}
                      name="Perform"
                      placeholder="0.00"
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>
              <div className={style.btn}>
                <button
                  onClick={Gradform}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          </div>
      )}
       
       {Hsec && (
            <div style={{ display: "initial" }} className={style.edu_form}>
            <div className={style.e_head}>
        <AiOutlineClose className={style.close} onClick={closecard} />    
              <h6>Senior Secondary or Equivalent (XII) details</h6>
            </div>
            <div className={style.form_div}>
              <form onSubmit={Gradform}>
                <div className={style.dates}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Pursuing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Completed
                    </label>
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
                    Expected year of completion
                  </label>
                  <select
                    value={formData.startYear}
                    onChange={inputEvent}
                    name="Year"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="choose Year">Choose Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                  </select>
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
                    Board
                  </label>
                  <input
                    value={formData.board}
                    onChange={inputEvent}
                    name="board"
                    placeholder="e.g CBSE"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className={style.dates}>
                  <div className={style.select}>
                    <label
                      style={{
                        fontFamily: "roobert",
                        fontSize: "1vmax",
                        fontWeight: "550",
                      }}
                      htmlFor="exampleInputEmail1"
                      className="form-label"
                    >
                      Performance Scale (Optional)
                    </label>
                    <select
                      value={formData.PScale}
                      onChange={inputEvent}
                      name="PScale"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="percentage">Percentage</option>
                      <option value="CGPA (Scale of 10)">CGPA (Scale of 10)</option>
                      <option value="CGPA (Scale of 9)">CGPA (Scale of 9)</option>
                      <option value="CGPA (Scale of 8)">CGPA (Scale of 8)</option>
                      <option value="CGPA (Scale of 7)">CGPA (Scale of 7)</option>
                      <option value="CGPA (Scale of 5)">CGPA (Scale of 5)</option>
                      <option value="CGPA (Scale of 4)">CGPA (Scale of 4)</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div style={{ marginTop: ".9vmax" }} className={style.select}>
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
                        Performance (Optional)
                      </label>
                      <input
                        value={formData.Perform}
                        onChange={inputEvent}
                        name="Perform"
                        placeholder="0.00"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>
                <div className={style.dates}>
                  <div style={{ width: "100%" }} className={style.select}>
                    <label
                      style={{
                        fontFamily: "roobert",
                        fontSize: "1vmax",
                        fontWeight: "550",
                      }}
                      htmlFor="exampleInputEmail1"
                      className="form-label"
                    >
                      Stream (Optional)
                    </label>
                    <select
                      value={formData.startYear}
                      onChange={inputEvent}
                      name="startYear"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="choose Year">Choose Stream</option>
                      <option value="Science">Science</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Arts">Arts</option>
                    </select>
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
                    School
                  </label>
                  <input
                    value={formData.school}
                    onChange={inputEvent}
                    name="school"
                    placeholder="e.g Delhi Public School"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
    
                <div className={style.btn}>
                  <button
                    onClick={Gradform}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            </div>
       )}
 
        {sec && (
          <div style={{ display: "none" }} className={style.edu_form}>
        <div className={style.e_head}>
        <AiOutlineClose className={style.close} onClick={closecard} />    
          <h6>Diploma details</h6>
        </div>
        <div className={style.form_div}>
          <form onSubmit={Gradform}>
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
                Collage
              </label>
              <input
                value={formData.board}
                onChange={inputEvent}
                name="board"
                placeholder="e.g IGNOU"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className={style.dates}>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Start year
                </label>
                <select
                  value={formData.startYear}
                  onChange={inputEvent}
                  name="startYear"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="choose Year">Choose Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                </select>
              </div>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  End year
                </label>
                <select
                  value={formData.endYear}
                  onChange={inputEvent}
                  name="endYear"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="Choose Year">Choose Year</option>
                  <option value="2029">2029</option>
                  <option value="2028">2028</option>
                  <option value="2027">2027</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                </select>
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
                Stream
              </label>
              <input
                value={formData.school}
                onChange={inputEvent}
                name="school"
                placeholder="e.g Creative Writing"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className={style.dates}>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Performance Scale (Optional)
                </label>
                <select
                  value={formData.PScale}
                  onChange={inputEvent}
                  name="PScale"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="percentage">Percentage</option>
                  <option value="CGPA (Scale of 10)">CGPA (Scale of 10)</option>
                  <option value="CGPA (Scale of 9)">CGPA (Scale of 9)</option>
                  <option value="CGPA (Scale of 8)">CGPA (Scale of 8)</option>
                  <option value="CGPA (Scale of 7)">CGPA (Scale of 7)</option>
                  <option value="CGPA (Scale of 5)">CGPA (Scale of 5)</option>
                  <option value="CGPA (Scale of 4)">CGPA (Scale of 4)</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div style={{ marginTop: ".9vmax" }} className={style.select}>
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
                    Performance (Optional)
                  </label>
                  <input
                    value={formData.Perform}
                    onChange={inputEvent}
                    name="Perform"
                    placeholder="0.00"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>

            <div className={style.btn}>
              <button
                onClick={Gradform}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
          </div>
        )}

        {dip && (
          <div style={{ display: "initial" }} className={style.edu_form}>
          <div className={style.e_head}>
        <AiOutlineClose className={style.close} onClick={closecard} />    
            <h6>PhD details</h6>
          </div>
          <div className={style.form_div}>
            <form onSubmit={Gradform}>
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
                  Collage
                </label>
                <input
                  value={formData.board}
                  onChange={inputEvent}
                  name="board"
                  placeholder="e.g Jamia Millia Islamia"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className={style.dates}>
                <div className={style.select}>
                  <label
                    style={{
                      fontFamily: "roobert",
                      fontSize: "1vmax",
                      fontWeight: "550",
                    }}
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    Start year
                  </label>
                  <select
                    value={formData.startYear}
                    onChange={inputEvent}
                    name="startYear"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="choose Year">Choose Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                  </select>
                </div>
                <div className={style.select}>
                  <label
                    style={{
                      fontFamily: "roobert",
                      fontSize: "1vmax",
                      fontWeight: "550",
                    }}
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    End year
                  </label>
                  <select
                    value={formData.endYear}
                    onChange={inputEvent}
                    name="endYear"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Choose Year">Choose Year</option>
                    <option value="2029">2029</option>
                    <option value="2028">2028</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                  </select>
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
                  Stream
                </label>
                <input
                  value={formData.school}
                  onChange={inputEvent}
                  name="school"
                  placeholder="e.g Commerce & Business Studies"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className={style.dates}>
                <div className={style.select}>
                  <label
                    style={{
                      fontFamily: "roobert",
                      fontSize: "1vmax",
                      fontWeight: "550",
                    }}
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    Performance Scale (Optional)
                  </label>
                  <select
                    value={formData.PScale}
                    onChange={inputEvent}
                    name="PScale"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="CGPA (Scale of 10)">CGPA (Scale of 10)</option>
                    <option value="CGPA (Scale of 9)">CGPA (Scale of 9)</option>
                    <option value="CGPA (Scale of 8)">CGPA (Scale of 8)</option>
                    <option value="CGPA (Scale of 7)">CGPA (Scale of 7)</option>
                    <option value="CGPA (Scale of 5)">CGPA (Scale of 5)</option>
                    <option value="CGPA (Scale of 4)">CGPA (Scale of 4)</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div style={{ marginTop: ".9vmax" }} className={style.select}>
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
                      Performance (Optional)
                    </label>
                    <input
                      value={formData.Perform}
                      onChange={inputEvent}
                      name="Perform"
                      placeholder="0.00"
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>

              <div className={style.btn}>
                <button
                  onClick={Gradform}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          </div>
        )}
      

     
    
      {/* ------------ add Gradution --------------------- */}

       {/* ------------ Update Gradution --------------------- */}

      <div style={{display:"none"}} className={style.edu_form}>
            <div className={style.e_head}>
        <AiOutlineClose className={style.close} onClick={closecard} />    
            <h6>Graduation details/ Post graduation details</h6>
            </div>
            <div className={style.form_div}>
                    <form onSubmit={()=> updateGrad(updateData.id)}>
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
                            College
                        </label>
                        <input
                            value={updateData.collagename}
                            onChange={updateEvent}
                            name="collagename"
                            placeholder="e.g College Name"
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        </div>
                        <div className={style.dates}>
                        <div className={style.select}>
                            <label
                            style={{
                                fontFamily: "roobert",
                                fontSize: "1vmax",
                                fontWeight: "550",
                            }}
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                            >
                            Start year
                            </label>
                            <select
                            value={updateData.startYear}
                            onChange={updateEvent}
                            name="startYear"
                            className="form-select"
                            aria-label="Default select example"
                            >
                            <option value="choose Year">Choose Year</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            </select>
                        </div>
                        <div className={style.select}>
                            <label
                            style={{
                                fontFamily: "roobert",
                                fontSize: "1vmax",
                                fontWeight: "550",
                            }}
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                            >
                            End year
                            </label>
                            <select
                            value={updateData.endYear}
                            onChange={updateEvent}
                            name="endYear"
                            className="form-select"
                            aria-label="Default select example"
                            >
                            <option value="Choose Year">Choose Year</option>
                            <option value="2029">2029</option>
                            <option value="2028">2028</option>
                            <option value="2027">2027</option>
                            <option value="2026">2026</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            </select>
                        </div>
                        </div>
                        <div className={style.dates}>
                        <div className={style.select}>
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
                                Degree
                            </label>
                            <input
                                value={updateData.Degree}
                                onChange={updateEvent}
                                name="Degree"
                                placeholder="e.g B.Sc (Hons.)"
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            </div>
                        </div>
                        <div className={style.select}>
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
                                Stream(Optional)
                            </label>
                            <input
                                value={updateData.Stream}
                                onChange={updateEvent}
                                name="Stream"
                                placeholder="e.g Economics"
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            </div>
                        </div>
                        </div>

                        <div className={style.popup}>
                        <h6>
                            Example: If your degree is B.Sc in Chemistry, then select
                            Bachelor of Science (B.Sc) in <span>degree</span> and{" "}
                            <span>Chemistry</span> in streams.
                        </h6>
                        <h6>
                            If you can't find your degree, check for typos or different ways
                            of writing your degree or choose from the closest available.
                            Write to <span>support@internshala.com</span> if you are
                            pursuing a degree not available in the list.
                        </h6>
                        </div>

                        <div className={style.dates}>
                        <div className={style.select}>
                            <label
                            style={{
                                fontFamily: "roobert",
                                fontSize: "1vmax",
                                fontWeight: "550",
                            }}
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                            >
                            Performance Scale (Optional)
                            </label>
                            <select
                            value={updateData.PScale}
                            onChange={updateEvent}
                            name="PScale"
                            className="form-select"
                            aria-label="Default select example"
                            >
                            <option value="percentage">Percentage</option>
                            <option value="CGPA (Scale of 10)">CGPA (Scale of 10)</option>
                            <option value="CGPA (Scale of 9)">CGPA (Scale of 9)</option>
                            <option value="CGPA (Scale of 8)">CGPA (Scale of 8)</option>
                            <option value="CGPA (Scale of 7)">CGPA (Scale of 7)</option>
                            <option value="CGPA (Scale of 5)">CGPA (Scale of 5)</option>
                            <option value="CGPA (Scale of 4)">CGPA (Scale of 4)</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                        <div style={{ marginTop: ".9vmax" }} className={style.select}>
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
                                Performance (Optional)
                            </label>
                            <input
                                value={updateData.Perform}
                                onChange={updateEvent}
                                name="Perform"
                                placeholder="0.00"
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            </div>
                        </div>
                        </div>
                        <div className={style.btn}>
                        <button
                            onClick={()=> updateGrad(updateData.id)}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                        </div>
                    </form>
            
            </div>
      </div>
      <div style={{ display: "none" }} className={style.edu_form}>
        <div className={style.e_head}>
        <AiOutlineClose className={style.close} onClick={closecard} />    
          <h6>Senior Secondary or Equivalent (XII) details</h6>
        </div>
        <div className={style.form_div}>
          <form onSubmit={Gradform}>
            <div className={style.dates}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Pursuing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Completed
                </label>
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
                Expected year of completion
              </label>
              <select
                value={formData.startYear}
                onChange={inputEvent}
                name="Year"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="choose Year">Choose Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
              </select>
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
                Board
              </label>
              <input
                value={formData.board}
                onChange={inputEvent}
                name="board"
                placeholder="e.g CBSE"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className={style.dates}>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Performance Scale (Optional)
                </label>
                <select
                  value={formData.PScale}
                  onChange={inputEvent}
                  name="PScale"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="percentage">Percentage</option>
                  <option value="CGPA (Scale of 10)">CGPA (Scale of 10)</option>
                  <option value="CGPA (Scale of 9)">CGPA (Scale of 9)</option>
                  <option value="CGPA (Scale of 8)">CGPA (Scale of 8)</option>
                  <option value="CGPA (Scale of 7)">CGPA (Scale of 7)</option>
                  <option value="CGPA (Scale of 5)">CGPA (Scale of 5)</option>
                  <option value="CGPA (Scale of 4)">CGPA (Scale of 4)</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div style={{ marginTop: ".9vmax" }} className={style.select}>
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
                    Performance (Optional)
                  </label>
                  <input
                    value={formData.Perform}
                    onChange={inputEvent}
                    name="Perform"
                    placeholder="0.00"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>
            <div className={style.dates}>
              <div style={{ width: "100%" }} className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Stream (Optional)
                </label>
                <select
                  value={formData.startYear}
                  onChange={inputEvent}
                  name="startYear"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="choose Year">Choose Stream</option>
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
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
                School
              </label>
              <input
                value={formData.school}
                onChange={inputEvent}
                name="school"
                placeholder="e.g Delhi Public School"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className={style.btn}>
              <button
                onClick={Gradform}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div style={{ display: "none" }} className={style.edu_form}>
        <div className={style.e_head}>
        <AiOutlineClose className={style.close} onClick={closecard} />    
          <h6>Diploma details</h6>
        </div>
        <div className={style.form_div}>
          <form onSubmit={Gradform}>
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
                Collage
              </label>
              <input
                value={formData.board}
                onChange={inputEvent}
                name="board"
                placeholder="e.g IGNOU"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className={style.dates}>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Start year
                </label>
                <select
                  value={formData.startYear}
                  onChange={inputEvent}
                  name="startYear"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="choose Year">Choose Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                </select>
              </div>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  End year
                </label>
                <select
                  value={formData.endYear}
                  onChange={inputEvent}
                  name="endYear"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="Choose Year">Choose Year</option>
                  <option value="2029">2029</option>
                  <option value="2028">2028</option>
                  <option value="2027">2027</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                </select>
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
                Stream
              </label>
              <input
                value={formData.school}
                onChange={inputEvent}
                name="school"
                placeholder="e.g Creative Writing"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className={style.dates}>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Performance Scale (Optional)
                </label>
                <select
                  value={formData.PScale}
                  onChange={inputEvent}
                  name="PScale"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="percentage">Percentage</option>
                  <option value="CGPA (Scale of 10)">CGPA (Scale of 10)</option>
                  <option value="CGPA (Scale of 9)">CGPA (Scale of 9)</option>
                  <option value="CGPA (Scale of 8)">CGPA (Scale of 8)</option>
                  <option value="CGPA (Scale of 7)">CGPA (Scale of 7)</option>
                  <option value="CGPA (Scale of 5)">CGPA (Scale of 5)</option>
                  <option value="CGPA (Scale of 4)">CGPA (Scale of 4)</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div style={{ marginTop: ".9vmax" }} className={style.select}>
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
                    Performance (Optional)
                  </label>
                  <input
                    value={formData.Perform}
                    onChange={inputEvent}
                    name="Perform"
                    placeholder="0.00"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>

            <div className={style.btn}>
              <button
                onClick={Gradform}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div style={{ display: "none" }} className={style.edu_form}>
        <div className={style.e_head}>
        <AiOutlineClose className={style.close} onClick={closecard} />    
          <h6>PhD details</h6>
        </div>
        <div className={style.form_div}>
          <form onSubmit={Gradform}>
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
                Collage
              </label>
              <input
                value={formData.board}
                onChange={inputEvent}
                name="board"
                placeholder="e.g Jamia Millia Islamia"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className={style.dates}>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Start year
                </label>
                <select
                  value={formData.startYear}
                  onChange={inputEvent}
                  name="startYear"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="choose Year">Choose Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                </select>
              </div>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  End year
                </label>
                <select
                  value={formData.endYear}
                  onChange={inputEvent}
                  name="endYear"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="Choose Year">Choose Year</option>
                  <option value="2029">2029</option>
                  <option value="2028">2028</option>
                  <option value="2027">2027</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                </select>
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
                Stream
              </label>
              <input
                value={formData.school}
                onChange={inputEvent}
                name="school"
                placeholder="e.g Commerce & Business Studies"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className={style.dates}>
              <div className={style.select}>
                <label
                  style={{
                    fontFamily: "roobert",
                    fontSize: "1vmax",
                    fontWeight: "550",
                  }}
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Performance Scale (Optional)
                </label>
                <select
                  value={formData.PScale}
                  onChange={inputEvent}
                  name="PScale"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="percentage">Percentage</option>
                  <option value="CGPA (Scale of 10)">CGPA (Scale of 10)</option>
                  <option value="CGPA (Scale of 9)">CGPA (Scale of 9)</option>
                  <option value="CGPA (Scale of 8)">CGPA (Scale of 8)</option>
                  <option value="CGPA (Scale of 7)">CGPA (Scale of 7)</option>
                  <option value="CGPA (Scale of 5)">CGPA (Scale of 5)</option>
                  <option value="CGPA (Scale of 4)">CGPA (Scale of 4)</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div style={{ marginTop: ".9vmax" }} className={style.select}>
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
                    Performance (Optional)
                  </label>
                  <input
                    value={formData.Perform}
                    onChange={inputEvent}
                    name="Perform"
                    placeholder="0.00"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
            </div>

            <div className={style.btn}>
              <button
                onClick={Gradform}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ------------ add Gradution --------------------- */}


     
     
     {showcardopt && (
       <div className={style.edu_option}>
           <div className={style.fhead}>
               <h3>Education</h3>
               <AiOutlineClose className={style.closee} onClick={()=> setshowcardopt(!showcardopt)} />    
           </div>
           <div  className={style.options}>
               <div onClick={ ()=> setGrad(!Grad)} className={style.opt}>
                  <AiOutlinePlus className={style.plus} />
                  <h6>Add graduation/ post graduation</h6>
               </div>
               <div onClick={ ()=> setHsec(!Hsec)} className={style.opt}>
                  <AiOutlinePlus className={style.plus} />
                  <h6>Add senior secondary (XII)</h6>
               </div>
               <div onClick={ ()=> setsec(!sec)} className={style.opt}>
                  <AiOutlinePlus className={style.plus} />  
                  <h6>Add secondary(X)</h6>
               </div>
               <div onClick={ ()=> setdip(!dip)} className={style.opt}>
                  <AiOutlinePlus className={style.plus} />
                  <h6>Add Diploma</h6>
               </div>
               <div className={style.opt}>
                  <AiOutlinePlus className={style.plus} />
                  <h6>Add phD</h6>
               </div>
           </div>
       </div>
      )}

            <div className={style.rsm}>
            <div className={style.edu}>
              <div className={style.l_edu}>
                <h4>EDUCATION</h4>
              </div>
              <div className={style.r_edu}>
                <div className={style.rows}>
                 {educationr.map((el, i) => {
                    
                    return (
                        
                        <div key={i} className={style.row_container}>
                                <div className={style.row}>
                                    <h5>{el.Stream}</h5>
                                    <h6>{el.collagename}</h6>
                                    <h6>{el.startYear}-{el.endYear}</h6>
                                </div>
                                <div className={style.ricn}>
                                    <HiOutlinePencil onClick={()=> findeducation(el.id)} className={style.ri} />
                                    <RiDeleteBinLine onClick={()=>{deleteGrad(el.id)}} className={style.ri} />
                                </div>
                            </div>
                    );
                })}
                    
                 

                  <div onClick={()=> setshowcardopt(!showcardopt)} className={style.add}>
                    <AiOutlinePlus className={style.addi} />
                    <h6>Add education</h6>
                  </div>
                </div>
              </div>
            </div>
            </div>
    </>
  )
}

export default page