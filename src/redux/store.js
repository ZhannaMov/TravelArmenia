import {configureStore} from "@reduxjs/toolkit";

import hikingReducer from './slices/hikingSlice'
import userReducer from './slices/userSlice'
import mountainReducer from "./slices/mountainSlice";
import festivalsReducer from './slices/festivalsSlice'
import tourTypesReducer from './slices/tourTypesSlice'
import toursReducer from './slices/toursSlice'
import loggedUserReducer from '../redux/slices/loggedUserSlice'
import reviewsSlice from "./slices/reviewsSlice";
import reviewsReducer from './slices/reviewsSlice';
import blogReducer from "./slices/blogSlice"
import bookingReducer from './slices/bookingSlice'
 const store = configureStore({
    reducer: {
        hikingReducer,
        userReducer,
       mountainReducer,
       festivalsReducer,
        tourTypesReducer,
        toursReducer,
        loggedUserReducer,
        reviewsReducer,
        blogReducer,
        bookingReducer
    }
})

export default store