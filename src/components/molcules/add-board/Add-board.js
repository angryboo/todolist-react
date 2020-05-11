import React, { useState } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Add-board.css';
import AddBoardInput from '../../atoms/add-board-input/Add-board-input';
import AddBoardButton from '../../atoms/add-board-button/Add-board-button';

const st = classNames.bind(style);

const AddBoard = ({ board, setBoard }) => {
  const [boardName, getBoardName] = useState('');
  const generateID = () => Math.max(...board.map(({ id }) => id)) + 1;
  const addBoard = (e) => {
    e.preventDefault();
    if (!boardName.length) return;
    setBoard(() => [...board, { id: generateID(), boardName, list: [] }]);
    getBoardName('');
    e.target.lastElementChild.firstElementChild.value = '';
  };
  return (
    <form className={st('add-board')} onSubmit={addBoard} id="input-board">
      <AddBoardButton board={board} setBoard={setBoard} />
      <div className={st('add-board-input-layout')}>
        <AddBoardInput
          board={board}
          setBoard={setBoard}
          getBoardName={getBoardName}
          boardName={boardName}
        />
      </div>
    </form>
  );
};

AddBoard.defaultProps = {
  board: [],
  setBoard: () => {},
};
AddBoard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  board: propTypes.array,
  setBoard: propTypes.func,
};

export default AddBoard;
