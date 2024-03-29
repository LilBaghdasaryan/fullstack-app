import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../../servicies";

const initialState = {
    loading: false,
    users: [],
    error: ''
  }

  export const fetchUsers = createAsyncThunk('user/fetchUsers',  () => {
    return userService.GetInfo("https://api.thecatapi.com/v1/categories").then(response => response);
    
  });

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
          state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false
          state.users = action.payload
          state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false
          state.users = []
          state.error = action.error.message
        })
      }
})



export default userSlice.reducer;