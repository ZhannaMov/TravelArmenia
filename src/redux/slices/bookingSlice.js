import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



const initialState ={
    bookings: [],
    error: ''
}

export const addBooking = createAsyncThunk(
    "addBooking",
    async({ tourId, formData }, thunkAPI) =>{
        try{
            const response= await axios.post(`http://localhost:8000/booking`,  { ...formData, tourId });
            return response.data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

const bookingSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addBooking.fulfilled, (state, {payload}) => {
            state.bookings = payload
            state.error = ''
        })
        builder.addCase(addBooking.rejected, (state, {payload}) => {
            state.error = payload
        })

    }
})

export default bookingSlice.reducer