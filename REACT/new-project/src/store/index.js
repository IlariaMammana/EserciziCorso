import { configureStore } from "@reduxjs/toolkit"
import toDoReducer from '../store/slices/toDoSlice';

export default configureStore ({
    reducer: {
        todos: toDoReducer,
    }
});