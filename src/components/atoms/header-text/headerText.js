import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './headerText.css';

const st = classNames.bind(style);

const HeaderText = ({ signedUser, isSignedin }) => (
  <div className={st('signin-text')}>
    {isSignedin ? `${signedUser} 님 환영합니다!` : '로그인이 필요합니다!'}
  </div>
);

HeaderText.defaultProps = {
  signedUser: 'Please Sign in',
  isSignedin: false,
};
HeaderText.propTypes = {
  signedUser: propTypes.string,
  isSignedin: propTypes.bool,
};

export default HeaderText;
