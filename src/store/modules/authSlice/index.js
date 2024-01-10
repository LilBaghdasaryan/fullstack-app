import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    isAuth: false,
  }


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLogin : (state, action) => {
            state.isAuth = action.payload.isAuth;
        }
    }
})

export default authSlice.reducer
export const { userLogin } = authSlice.actions