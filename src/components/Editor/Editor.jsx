import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodoAction } from 'redux/todosSlice';

import { RiCloseFill, RiCheckFill } from 'react-icons/ri';

export const Editor = ({ text, id, onClose }) => {
  const [value, setValue] = useState(text);

  const dispatch = useDispatch();

  function handlerChange({ target }) {
    setValue(target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      editTodoAction({
        id,
        text: value,
      })
    );

    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handlerChange} />
        {value ? (
          <button type="submit">
            <RiCheckFill size={24} />
          </button>
        ) : (
          <button type="submit" disabled>
            <RiCheckFill size={24} />
          </button>
        )}
        <button type="button" onClick={onClose}>
          <RiCloseFill size={24} />
        </button>
      </form>
    </div>
  );
};
