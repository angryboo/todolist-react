import React, { useRef } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './List-item-input.css';

const st = classNames.bind(style);

const ListItemInput = ({ todoId, todo, setTodo }) => {
  const inputRef = useRef();
  const generateId = () => Math.max(...(todo.map(({ id }) => id) + 1));
  const addTodoList = (e) => {
    if (!inputRef.current.value || e.key !== 'Enter') return;
    setTodo([
      ...todo,
      { id: generateId(), boardId: todoId, todo: inputRef.current.value },
    ]);
    inputRef.current.value = '';
  };
  return (
    <input
      className={st('list-item-input')}
      type="text"
      onKeyPress={addTodoList}
      ref={inputRef}
    />
  );
};

ListItemInput.defaultProps = {
  setTodo: () => {},
  todoId: 0,
  todo: [],
};
ListItemInput.propTypes = {
  setTodo: propTypes.func,
  todoId: propTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  todo: propTypes.array,
};

export default ListItemInput;
