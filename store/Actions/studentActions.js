import axios from "@/utils/axios";
import {
    addstudent,
    removeerror,
    removestudent,
    iserror,
    gethome,
    foundjob,
    addmessage,
    addalljobs
} from "../Reducers/studentReducers"

export const asyncgethome = () => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("/");
        dispatch(gethome(data));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncaddstudent = (student) => async(dispatch,getState) =>{
    try{
        console.log(student,"ots comming datta");
        const {data} = await axios.post("/student/signup",student);
        console.log(data ,"irs sfsfssf");
        dispatch(addstudent(data));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncloginstudent = (student) => async(dispatch,getState) =>{
    try{
        const {data} = await axios.post("/student/signin",student);
        console.log(data,"its student data");
        dispatch(addstudent(data));
    }catch(error){
        dispatch(iserror(error.response.data.status_message)); 
    }
}

export const asynclogoutstudent = () => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("/student/signout");
        console.log(data,"uts logoutdata");
        dispatch(removestudent(data));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asyncalljobs = () => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("/alljobs");
        dispatch(addstudent(data.student));
        dispatch(addalljobs(data.jobs));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}

export const asynccurrentstudent = () => async(dispatch,getState) =>{
    try{
        const {data} = await axios.get("/student");
        dispatch(addstudent(data.student));
        dispatch(addalljobs(data.jobs));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
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



export const asyncfindresume = (id) => async(dispatch,getState) =>{
    try{
        console.log(dispatch,"uts dihshsh");
        const {data} = await axios.get("/sresume/"+id);
        console.log(data.student,"its crnt trer");
        await dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.status_message));
    }
}



