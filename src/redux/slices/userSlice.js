import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    error: ''
}

export const getUsers= createAsyncThunk(
    'getUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8000/user")
            return response.data
        } catch (e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addUserId = createAsyncThunk(
    "addUserId",
    async({ userId, hikingId }, thunkAPI) =>{
        try{
            const response= await axios.patch(`http://localhost:8000/hiking/${hikingId}`, { userId });
            return response.data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)



export const addUserIdGeneral = createAsyncThunk(
    "addUserIdGeneral",
    async({ userId, resourceId, resourceType }, thunkAPI) =>{
        try{
            const response = await axios.patch(`http://localhost:8000/${resourceType}/${resourceId}`, { userId });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const removeUserId = createAsyncThunk(
    "hiking/removeUserId",
    async ({ userId, itemId }, thunkAPI) => {
        try {
            const response = await axios.patch(`http://localhost:8000/tours/${itemId}`, {
                userId: userId
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, {payload}) => {
            state.users = payload
            state.error = ''
        })
        builder.addCase(getUsers.rejected, (state, {payload}) => {
            state.error = payload
        })
        builder.addCase(addUserId.rejected, (state, { payload }) => {
            state.error = payload;
        });
        builder.addCase(removeUserId.fulfilled, (state, action) => {
            // Update the hiking array in the state
            if (!state.tours) {
                state.tours = [];
            }
            state.tours = state.tours.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        userId: action.payload.userId
                    };
                }
                return item;
            });
        });
        builder.addCase(addUserIdGeneral.rejected, (state, {payload})=>{
            state.error = payload;
        })
    }
})

export default userSlice.reducer