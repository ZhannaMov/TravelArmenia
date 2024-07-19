import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loggedUser: {},
    error: ''
}
export const getLoggedUser = createAsyncThunk(
    'getLoggedUser',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8000/user")
            return response.data
        } catch (e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addLoggedUser = createAsyncThunk(
    'addLoggedUser',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8000/user", userData)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)


export const deleteLoggedUser = createAsyncThunk(
    'deleteLoggedUser',
    async (_, thunkAPI) => {
        try {
            const response = await axios.put("http://localhost:8000/user",{})
            return response.data
        } catch (e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)




const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getLoggedUser.fulfilled, (state, {payload}) => {

            state.loggedUser = payload
            state.error = ''
        })
        builder.addCase(getLoggedUser.rejected, (state, {payload}) => {
            state.error = payload
        })
        builder.addCase(deleteLoggedUser.fulfilled, (state) => {
            // Empty the loggedUser array
            state.loggedUser = [];
            state.error = '';
        });
        builder.addCase(deleteLoggedUser.rejected, (state, { payload }) => {
            state.error = payload;
        });
        builder.addCase(addLoggedUser.fulfilled, (state, { payload }) => {
            state.loggedUser = payload;
            state.error = '';
        });
        builder.addCase(addLoggedUser.rejected, (state, { payload }) => {
            state.error = payload;
        });
    }
})

export default loggedUserSlice.reducer