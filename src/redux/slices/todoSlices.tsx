import {createSlice , createAsyncThunk ,PayloadAction} from "@reduxjs/toolkit" 
import * as api from "../../services/api"
import { json } from "stream/consumers";
interface TodoState {
    isLoading: boolean;
    data: any | null;
    token:any
    isError: boolean;
  }
  
  const initialState: TodoState = {
    isLoading: false,
    data: null,
    isError: false,
    token :null
  };

  interface inputData {
    email:string,
    password:string
  }

// Action
export const fetchTodos  = createAsyncThunk("fetchTodos" , async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();

})



// export const loginUser = createAsyncThunk("loginUser", async(data:any)=>{
//   const data1=JSON.stringify({
//     email:data.email,
//     password:data.password
//   })
  
//   const response = await fetch("http://localhost:4000/user/v1/login" ,{method:"POST" ,headers:{"Content-Type": "application/json"}, body:data1});
//   return response.json();

// })
// export const login =createAsyncThunk("login" , async(data:any)=>{
  
//   const data1 = JSON.stringify({
//     email:data.email,
//     password:data.password
//   });
//   const headers={ }
//     return api.postApi("http://localhost:4000/user/v1/register" ,"POST", headers , data1)
// })

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  interface User{
    name:string,
    id:string,
    email:string,
    password:string,
    token:string,
    role:string,
    mobile_number:number,
  }
const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        // todoss:(state,action:PayloadAction<Todo[]>)=>{
        //     state.data = [...state.data, action.payload]
        // },
        
    },
    extraReducers:(builder)=>{
          builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
          });
          builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
            state.isLoading = false;
            state.data = action.payload;
          });
          builder.addCase(fetchTodos.rejected, (state, action: PayloadAction<any>) => {
            state.isError = true;
            console.log("Error", action.payload);
          });
          // builder.addCase(loginUser.pending, (state) => {
          //   state.isLoading = true;
          // });
          // builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<User[]>) => {
          //   state.isLoading = false;
          //   state.data = action.payload;
          // });
          // builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
          //   state.isError = true;
          //   console.log("Error", action.payload);
          // });

    }

})
// export const { todoss } = todoSlice.actions

export default todoSlice.reducer;

// https://redux-toolkit.js.org/tutorials/typescript