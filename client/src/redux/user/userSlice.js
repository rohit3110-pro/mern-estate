import { createSlice } from "@reduxjs/toolkit";
import SignIn from "../../pages/signin";

const initialState ={
    currentUser: null,
    error:null,
    loading:false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        SignInStart: (state) =>{
            state.loading=true;
        },
        signInSuccess: (state,action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state,action) =>{
            state.error = action.payload;
            state.loading = false;
        },

        updateUserStart: (state) =>{
            state.loading = true;
        },
        updateUserSuccess: (state,action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure: (state,action) =>{
            state.error = action.payload;
            state.loading= false;
        },
        deleteUserStart: (state) =>{
            state.loading= true;
        },
        deleteUserSuccess:(state) =>{
            state.currentUser = null;
            state.loading = false;
            state.error= null;
        },
        deleteUserFailure:(state,action) =>{
           state.error = action.payload;
           state.loading = false;
        },


    },
});

export const{ SignInStart,signInSuccess,signInFailure,updateUserStart,updateUserSuccess,updateUserFailure,deleteUserStart,deleteUserSuccess,deleteUserFailure} = userSlice.actions;

export default userSlice.reducer;