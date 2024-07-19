import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Reviews from "../../components/Reviews/Reviews";

const initialState ={
    reviews: [],
    error: ''
}

export const getReviews = createAsyncThunk(
    'getReviews',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8000/reviews");
            console.log('Response data:', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReviews.fulfilled, (state, {payload}) => {
            state.reviews = payload
            state.error = ''
        })
        builder.addCase(getReviews.rejected, (state, {payload}) => {
            state.error = payload
        })

    }
})

export default reviewsSlice.reducer