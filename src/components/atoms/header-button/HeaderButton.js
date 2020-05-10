import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './HeaderButton.css';

const st = classNames.bind(style);

const HeaderButton = ({ setIsSignedin }) => {
  const doSignOut = () => {
    setIsSignedin(false);
  };
  return (
    <button className={st('header-button')} type="button" onClick={doSignOut}>
      Sign-Out
    </button>
  );
};

HeaderButton.defaultProps = {
  setIsSignedin: () => {},
};
HeaderButton.propTypes = {
  setIsSignedin: propTypes.func,
};

export default HeaderButton;
