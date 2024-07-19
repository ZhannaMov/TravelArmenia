import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    tourTypes: [],
    error: ''
}
export const getTourTypes = createAsyncThunk(
    'getTourTypes',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8000/tourTypes");
            console.log('Response data:', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

const tourTypesSlice = createSlice({
    name: 'tourTypes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTourTypes.fulfilled, (state, {payload}) => {
            state.tourTypes = payload
            state.error = ''
        })
        builder.addCase(getTourTypes.rejected, (state, {payload}) => {
            state.error = payload
        })

    }
})

export default tourTypesSlice.reducer