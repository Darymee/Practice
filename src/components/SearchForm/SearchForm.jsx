import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addTodoAction } from 'redux/todosSlice';

import { useLocalStorage } from 'hooks';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useEffect } from 'react';

export const SearchForm = () => {
  const [value, setValue] = useLocalStorage('search', '');
  const dispatch = useDispatch();

  useEffect(() => {
    setValue('');
  }, []);

  const handleInput = ({ target }) => setValue(target.value.trim());

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addTodoAction({
        id: nanoid(),
        text: value,
      })
    );

    setValue('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={value}
        autoFocus
      />
    </SearchFormStyled>
  );
};
