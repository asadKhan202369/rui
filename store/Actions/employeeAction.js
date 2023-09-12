import axios from "@/utils/axios";
import {
    addemployee,
    removeerror,
    removeemployee,
    iserror,
    gethome,
    foundjob
} from "../Reducers/employeeReducer"
import { data } from "autoprefixer";
import { toast } from 'react-toastify';
import { addstudent } from "../Reducers/studentReducers";


export const asyncgethome = () => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("/");
        dispatch(gethome(data));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncaddemployee = (employee) => async(dispatch,getState) =>{
    try{
        const {data} = await axios.post("/employee/signup",employee);
        dispatch(addemployee(data));
    }catch(error){
        console.log(error);
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncloginemployee = (employee) => async(dispatch,getState) =>{
    try{
        const {data} = await axios.post("/employee/signin",employee);
        console.log(data,"itts sign in data");
        dispatch(addemployee(data));
    }catch(error){
        console.log(error);
        dispatch(iserror(error.response.data.status_message)); 
    }
}

export const asynclogoutemployee = () => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("/employee/signout");
        console.log(data,"uts logoutdata");
        dispatch(removeemployee(data));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asynccurrentemployee = () => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("/employee/detail");
        dispatch(addemployee(data.employee));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}


export const asyncupdatedetails = (editdata) => async(dispatch,getState) =>{
    try{
        const {data} = await axios.post("/employee/update",editdata);
        dispatch(addemployee(data.employee));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncconfirmotp = (otp) => async(dispatch,getState) =>{
    console.log(otp);
    try{
        const {data} = await axios.post("/employee/confirm/employee",otp);
        console.log(data,"its data");
        dispatch(addemployee(data.employee));
    }catch(error){
        console.log(data,"its data");
        // dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncgetresume = () => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("/resume");
        dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncresetpassword = (forgotdata) => async(dispatch,getState) =>{
    try{
        const {data} = await axios.post("/forgot/password",forgotdata);
        console.log(data,"its forgot");
        // dispatch(addstudent(data.student));
    }catch(error){
        // dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncupdatepassword = (id,forgotdata) => async(dispatch,getState) =>{
    try{
        console.log("/forgot/reset_link/"+id,"its a reset update link");
        const {data} = await axios.post("/forgot/reset_link/"+id,forgotdata);
        console.log(data,"its forgot");
        dispatch(addstudent(data.student));
    }catch(error){
        // dispatch(iserror(error.response.data.status_message));
    }
}


// -------------------------------- jobs --------------------- 

export const asyncaddoppo = (jobdata) => async(dispatch,getState) =>{
    try{
        const {data} = await axios.post("/employee/create/opp",jobdata);
        dispatch(addemployee(data));
        toast.success('Job Succesfully Added!', { position: 'top-right' });
    }catch(error){
        console.log(error);
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncfindjob = (id) => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("employee/find/opp/" + id);
        dispatch(foundjob(data.job));
    }catch(error){
        console.log(error);
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncupdatejob = (id , editdata) => async(dispatch,getState) =>{
    
    try{
        const {data} = await axios.post("/employee/edit/opp/" + id , editdata);
        dispatch(addemployee(data.job));
        toast.success('Job Succesfully Updated!', { position: 'top-right' });

    }catch(error){
        console.log(error);
        console.log("bsdk kya error dera he mc");
        // dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncdeletejob = (id) => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("employee/delete/opp/"+id);
        dispatch(addemployee(data));
        toast.success('Job Succesfully Deleted!', { position: 'top-right' });
    }catch(error){
        console.log(error);
        // dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncapply = (id,applydata) => async(dispatch,getState) =>{
    try{
        const {data} = await axios.post("/employee/apply/"+id,applydata);
        dispatch(addemployee(data));
        toast.success('apply Succesfully Added!', { position: 'top-right' });
    }catch(error){
        console.log(error);
        dispatch(iserror(error.response.data.status_message));
    }
}








