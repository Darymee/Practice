import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/todosSlice';

import { Text, Grid, GridItem, Todo } from 'components';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      {!todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}

      <Grid>
        {!!todos.length &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo id={todo.id} text={todo.text} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
