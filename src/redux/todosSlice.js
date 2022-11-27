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
    editTodoAction: (state, { payload }) => {
      for (const task of state.todos) {
        if (task.id === payload.id) {
          task.text = payload.text;
          break;
        }
      }
    },
  },
});

export const { addTodoAction, deleteTodoAction, editTodoAction } =
  TodoSlice.actions;

export default TodoSlice.reducer;

export const selectTodos = state => state.todos;
