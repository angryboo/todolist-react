import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Todo-all.css';
import TodoItem from '../../molcules/todo-item/Todo-item';

const st = classNames.bind(style);

const TodoAll = ({ board, setBoard, todo, setTodo }) => (
  <ul className={st('todo-list')}>
    {board.map((item) => (
      <li className={st('todo-list-item')} key={item.id}>
        <TodoItem
          item={item}
          board={board}
          setBoard={setBoard}
          itemId={item.id}
          todo={todo}
          setTodo={setTodo}
        />
      </li>
    ))}
  </ul>
);

TodoAll.defaultProps = {
  board: [],
  setBoard: () => {},
  todo: [],
  setTodo: () => {},
};
TodoAll.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  board: propTypes.array,
  setBoard: propTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  todo: propTypes.array,
  setTodo: propTypes.func,
};

export default TodoAll;
