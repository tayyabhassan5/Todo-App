import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = action.payload;
            
            const existingTodo = state.todos.find(todo => todo.id === newTodo.id);
            if (!existingTodo) {
                state.todos.push(newTodo); 
            }       
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                console.log("todo",todo.completed)
                todo.completed = !todo.completed;
                console.log("todo",todo.completed)
                
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        editTodo: (state, action) => {
            
            const { id, title, completed } = action.payload;

            const index = state.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                
                state.todos[index].title = title;
                state.todos[index].completed = completed;
            }
        }
        
    },
});
export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
