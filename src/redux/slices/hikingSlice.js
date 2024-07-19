import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hiking: [],
  error: ''
}


export const getHiking = createAsyncThunk(
    'getHiking',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8000/tours");
            const allTours = response.data;
         return allTours.filter(tour => tour.typeId === 1);

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


const hikingSlice = createSlice({
    name: 'hiking',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getHiking.fulfilled, (state, {payload}) => {

            state.hiking = payload
            state.error = ''
        })
        builder.addCase(getHiking.rejected, (state, {payload}) => {
            state.error = payload
        })

    }
})



export default hikingSlice.reducer