import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Add-board.css';
import AddBoardInput from '../../atoms/add-board-input/Add-board-input';
import AddBoardButton from '../../atoms/add-board-button/Add-board-button';

const st = classNames.bind(style);

const AddBoard = ({ board, setBoard }) => {
  let boardName = '';
  const getBoardName = (name) => {
    boardName = name;
  };
  const generateID = () => Math.max(...board.map(({ id }) => id)) + 1;
  const addBoard = (e) => {
    e.preventDefault();
    console.log(boardName);
    console.log(board);
    setBoard(() => [...board, { id: generateID(), boardName, list: [] }]);
  };
  return (
    <form className={st('add-board')} onSubmit={addBoard}>
      <AddBoardButton board={board} setBoard={setBoard} />
      <div className={st('add-board-input-layout')}>
        <AddBoardInput
          board={board}
          setBoard={setBoard}
          getBoardName={getBoardName}
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
