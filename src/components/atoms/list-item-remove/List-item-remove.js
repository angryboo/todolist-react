import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './List-item-remove.css';

const st = classNames.bind(style);

const ListItemButton = ({ todoId, board, setBoard }) => {
  const removeBoard = () => {
    setBoard(board.filter(({ id }) => id !== todoId));
  };
  return (
    <button type="button" onClick={removeBoard} className={st('remove-board')}>
      remove
    </button>
  );
};

ListItemButton.defaultProps = {
  setBoard: () => {},
  todoId: 0,
  board: [],
};
ListItemButton.propTypes = {
  setBoard: propTypes.func,
  todoId: propTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  board: propTypes.array,
};

export default ListItemButton;
