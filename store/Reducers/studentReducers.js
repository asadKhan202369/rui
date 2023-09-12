import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    student:null,
    findjob:null,
    findintern:null,
    findResponsibility:null,
    findtraining:null,
    findlinks:null,
    findachive:null,
    findskill:null,
    findproject:null,
    errors:[],
    isAuthenticated:false,
    message:'',
    alljobs:'',
  
}

export const studentReducer = createSlice({
  name: 'student',
  initialState,
  
  reducers:{
     gethome:(state,action)=>{
       state.student = action.payload
     },
     addstudent:(state,action)=>{
        state.student = action.payload;
        state.isAuthenticated = true;
     },
     addalljobs:(state,action)=>{
      state.alljobs = action.payload;
     },
     addmessage:(state,action)=>{
      state.message = action.payload;
     },
     foundjob:(state,action)=>{
         state.findjob = action.payload;
      },
      foundintern:(state,action)=>{
         state.findintern = action.payload;
      },
      foundResponsibility:(state,action)=>{
         state.findResponsibility = action.payload;
      },
      foundtraining:(state,action)=>{
         state.findtraining = action.payload;
      },
      foundlinks:(state,action)=>{
         state.findlinks = action.payload;
      },
      foundachive:(state,action)=>{
         state.findachive = action.payload;
      },
      foundskill:(state,action)=>{
         state.findskill = action.payload;
      },
      foundproject:(state,action)=>{
         state.findproject = action.payload;
      },
      removestudent:(state,action)=>{
         state.student = null;
         state.isAuthenticated = false;
      },
      iserror:(state,action)=>{
         state.errors.push(action.payload);  
      },
      removeerror:(state,action)=>{
         state.errors = [];  
      },
  }
  
})

// Action creators are generated for each case reducer function
export const { 
   
    addstudent,
    removeerror,
    removestudent,
    iserror ,
    gethome,
    foundjob,
    foundintern,
    foundtraining,
    foundResponsibility,
    foundlinks,
    foundachive,
    foundskill,
    foundproject,
    addmessage,
    addalljobs

 } = studentReducer.actions

export default studentReducer.reducer;