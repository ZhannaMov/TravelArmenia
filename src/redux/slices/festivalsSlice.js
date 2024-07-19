import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    festivals: [],
    error: ''
}


export const getFestivals = createAsyncThunk(
    'getFestivals',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8000/festivals");
            console.log('Response data:', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


const festivalsSlice = createSlice({
    name: 'festivals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFestivals.fulfilled, (state, {payload}) => {
            state.festivals = payload
            state.error = ''
        })
        builder.addCase(getFestivals.rejected, (state, {payload}) => {
            state.error = payload
        })

    }
})

export default festivalsSlice.reducer