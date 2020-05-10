import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Header.css';
import HeaderText from '../../atoms/header-text/headerText';
import HeaderButton from '../../atoms/header-button/HeaderButton';

const st = classNames.bind(style);

const Header = ({ signedUser, isSignedin, setIsSignedin }) => (
  <div className={st('header')}>
    <div className={st('header-Text-layout')}>
      <HeaderText
        signedUser={signedUser}
        isSignedin={isSignedin}
        setIsSignedin={setIsSignedin}
      />
    </div>
    {isSignedin && (
      <div className={st('header-button-layout')}>
        <HeaderButton setIsSignedin={setIsSignedin} />
      </div>
    )}
  </div>
);
Header.defaultProps = {
  signedUser: 'Please Sign in',
  isSignedin: false,
  setIsSignedin: () => {},
};
Header.propTypes = {
  signedUser: propTypes.string,
  isSignedin: propTypes.bool,
  setIsSignedin: propTypes.func,
};

export default Header;
