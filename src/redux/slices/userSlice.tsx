import {createSlice , createAsyncThunk ,PayloadAction} from "@reduxjs/toolkit"
import * as api from "../../services/api";
import {loginUrl , registerUrl} from "../../constants/constants" 
interface LoginState {
    isLoading: boolean;
    data: any | null;
    token:any
    isError: boolean;
    role:string;
    registerData :[],
    isRegisterSuccuss:boolean;
    isLoginSuccuss:boolean;

  }
  
  const initialState: LoginState = {
    isLoading: false,
    data: null,
    isError: false,
    token :null,
    role:"",
    registerData:[],
    isRegisterSuccuss:false,
    isLoginSuccuss:false,

    

  };


  export const loginUser = createAsyncThunk("loginUser", async(data:any)=>{
    
    const data1=JSON.stringify({
      email:data.email,
      password:data.password
    })
    const headers={
        "Content-Type": "application/json"
    }
    // const response = await fetch("http://localhost:4000/user/v1/login" ,{method:"POST" ,headers:{"Content-Type": "application/json"}, body:data1});
    const response = await api.postApi(loginUrl ,"POST" , headers,data1 );
    return response.json();
  
  })



  export const registerUser = createAsyncThunk("registerUser", async(data:any)=>{
    const data1=JSON.stringify({
      email:data.email,
      password:data.password
    })
    const headers={
        "Content-Type": "application/json"
    }
    // const response = await fetch("http://localhost:4000/user/v1/login" ,{method:"POST" ,headers:{"Content-Type": "application/json"}, body:data1});
    const response = await api.postApi(registerUrl ,"POST" , headers,data1 );
    return response.json();
  
  })


  interface User{
    data:{
    name:string,
    id:string,
    email:string,
    password:string,
    token:string,
    role:string,
    mobile_number:number,
    }
  }


  const loginSlice =createSlice({
    name:"loginUser",
    initialState,
    reducers:{
        // setToken:(state, action: PayloadAction<any>)=>{
        //   state.jwtToken= action.payload.data.token?(action.payload.data.token as any):""
        // }
        // addToken:(state, action: PayloadAction<any>)=>{
        //   state.jwtToken= action.payload.data.token?(action.payload.data.token as any):""
        // }
    },
    extraReducers:(builder)=>{
       
        builder.addCase(loginUser.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.isLoginSuccuss=true;
          state.token= action.payload.data.token ?(action.payload.data.token as any):"";
          state.role=action.payload.data.role?(action.payload.data.role as string):"";
          localStorage.setItem("Token" , state.token);
          localStorage.setItem("role" , state.role);
        
        });
        builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
          state.isError = true;
          console.log("Error", action.payload);
        });


        builder.addCase(registerUser.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isRegisterSuccuss=true;
          state.data = action.payload;
          // state.token= action.payload.data.token ?(action.payload.data.token as any):""; 
          // state.role=action.payload.data.role?(action.payload.data.role as string):"";
          // localStorage.setItem("registerToken" , state.token);
          // localStorage.setItem("role" , state.role);
        
        });
        builder.addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
          state.isError = true;
          console.log("Error", action.payload);
        });

  }
    
  })

  // export const { setToken } = loginSlice.actions;

  export default loginSlice.reducer;