import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchTodosLoading(state) {
            state.loading = true;
            state.error = null;
        },
        fetchTodosSuccess(state, action) {
            state.loading = false;
            state.todos = action.payload;
        },
        fetchTodosError(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        completeTodo(state, action){
            const todo = state.todos.find(item => item.id === action.payload)
            const index = state.todos.indexOf(todo)
            todo.completed = true
            state.todos[index] = todo
        }
    },
});

export const { fetchTodosLoading, fetchTodosSuccess, fetchTodosError, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;