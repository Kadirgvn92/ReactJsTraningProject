import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    loading: false
}

export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data)
    return response.data;
})


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, actions) => {
            state.users = actions.payload
        })
    }
})



export const { } = userSlice.actions
export default userSlice.reducer