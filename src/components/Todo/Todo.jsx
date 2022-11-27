import { useDispatch } from 'react-redux';
import { deleteTodoAction } from 'redux/todosSlice';

import { RiDeleteBinLine } from 'react-icons/ri';

import { Text } from 'components';

import { DeleteButton, TodoWrapper } from './Todo.styled';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  const handlerDeleteTodo = () => dispatch(deleteTodoAction(id));
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handlerDeleteTodo}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
