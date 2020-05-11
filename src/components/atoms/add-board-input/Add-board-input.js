import React, { useRef } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Add-board-input.css';

const st = classNames.bind(style);

const AddBoardInput = ({ getBoardName }) => {
  const inputRef = useRef();
  return (
    <input
      className={st('add-board-input')}
      type="text"
      onChange={() => {
        getBoardName(inputRef.current.value);
      }}
      ref={inputRef}
    />
  );
};

AddBoardInput.defaultProps = {
  getBoardName: () => {},
};
AddBoardInput.propTypes = {
  getBoardName: propTypes.func,
};

export default AddBoardInput;
