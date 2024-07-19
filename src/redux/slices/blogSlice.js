import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Reviews from "../../components/Reviews/Reviews";

const initialState ={
    blog: [],
    error: ''
}

export const getBlog = createAsyncThunk(
    'getBlog',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8000/blog");
            console.log('Response data:', response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlog.fulfilled, (state, {payload}) => {
            state.blog = payload
            state.error = ''
        })
        builder.addCase(getBlog.rejected, (state, {payload}) => {
            state.error = payload
        })

    }
})

export default blogSlice.reducer