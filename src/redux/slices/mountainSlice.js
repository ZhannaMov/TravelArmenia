import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  mountain: [],
  error: ''
}


export const getMountain= createAsyncThunk(
  'getMountain',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8000/mountain")
      return response.data
    } catch (e){
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)


const mountainSlice = createSlice({
    name: 'mountain',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getMountain.fulfilled, (state, {payload}) => {
            state.mountain= payload
            state.error = ''
        })
        builder.addCase(getMountain.rejected, (state, {payload}) => {
            state.error = payload
        })

    }
})


export default mountainSlice.reducer