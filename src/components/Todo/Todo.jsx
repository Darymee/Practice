import { useDispatch } from 'react-redux';
import { deleteTodoAction } from 'redux/todosSlice';

import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';

import { Text } from 'components';

import { DeleteButton, EditButton, TodoWrapper } from './Todo.styled';
import { useState } from 'react';
import { Editor } from 'components/Editor/Editor';

export const Todo = ({ text, counter, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEditor = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const handlerDeleteTodo = () => dispatch(deleteTodoAction(id));
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        {!isOpen && <Text>{text}</Text>}

        <EditButton type="button" onClick={toggleEditor}>
          <RiEditLine size={24} />
        </EditButton>
        <DeleteButton type="button" onClick={handlerDeleteTodo}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        {isOpen && (
          <Editor text={text} id={id} onClose={() => toggleEditor()} />
        )}
      </TodoWrapper>
    </>
  );
};
