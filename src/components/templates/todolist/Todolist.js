import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Todolist.css';
import AddBoard from '../../molcules/add-board/Add-board';
import TodoAll from '../../organisms/todo-all/Todo-all';

const st = classNames.bind(style);

const TodoList = ({ board, setBoard, todo, setTodo }) => (
  <>
    <div className={st('add-board-layout')}>
      <AddBoard board={board} setBoard={setBoard} />
    </div>
    <TodoAll board={board} setBoard={setBoard} todo={todo} setTodo={setTodo} />
  </>
);

TodoList.defaultProps = {
  board: [],
  setBoard: () => {},
  todo: [],
  setTodo: () => {},
};
TodoList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  board: propTypes.array,
  setBoard: propTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  todo: propTypes.array,
  setTodo: propTypes.func,
};

export default TodoList;
