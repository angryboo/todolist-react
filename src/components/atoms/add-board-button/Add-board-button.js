import React from 'react';
// import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Add-board-button.css';

const st = classNames.bind(style);

const AddBoardButton = () => (
  <button className={st('add-board-button')} type="submit">
    New Board
  </button>
);

AddBoardButton.defaultProps = {};
AddBoardButton.propTypes = {};

export default AddBoardButton;
