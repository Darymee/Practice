import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodoAction: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodoAction: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
  },
});

export const { addTodoAction, deleteTodoAction } = TodoSlice.actions;

export default TodoSlice.reducer;

export const selectTodos = state => state.todos;
