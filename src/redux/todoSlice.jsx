import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = action.payload;
            // Check if the ID of the new todo already exists
            const existingTodo = state.todos.find(todo => todo.id === newTodo.id);
            if (!existingTodo) {
                // If the ID doesn't exist, push the new todo
                state.todos.push(newTodo); 
            }
            // If the ID already exists, you may handle it according to your requirement
            // For example, you can throw an error or handle it silently
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
});
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
