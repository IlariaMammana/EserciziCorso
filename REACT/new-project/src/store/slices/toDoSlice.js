import { createSlice } from "@reduxjs/toolkit"

const toDoSlice = createSlice({
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
        completedTodos(state, action) {
            const todoId = action.payload
            const newTodos = state.todos.map((i) => {
                if (i.id == todoId) {
                    return {...i, completed: true} 
                } else {
                    return i
                }
            })
        }
    },
});

export const { fetchTodosLoading, fetchTodosSuccess, fetchTodosError, completedTodos } = toDoSlice.actions;

export default toDoSlice.reducer;