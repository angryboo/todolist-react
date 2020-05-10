import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Todolist.css';
import AddBoard from '../../molcules/add-board/Add-board';

const st = classNames.bind(style);

const TodoList = ({ board, setBoard }) => (
  <div className={st('add-board-layout')}>
    <AddBoard board={board} setBoard={setBoard} />
  </div>
);

TodoList.defaultProps = {
  board: [],
  setBoard: () => {},
};
TodoList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  board: propTypes.array,
  setBoard: propTypes.func,
};

export default TodoList;
