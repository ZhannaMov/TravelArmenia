import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const initialState ={
    tours: [],
    error: ''
}
export const getTours = createAsyncThunk(
    'getTours',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8000/tours");
            console.log('Response data:', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

const toursSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTours.fulfilled, (state, {payload}) => {
            state.tours= payload
            state.error = ''
        })
        builder.addCase(getTours.rejected, (state, {payload}) => {
            state.error = payload
        })

    }
})

export default toursSlice.reducer