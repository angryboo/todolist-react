import React from 'react';
import classNames from 'classnames/bind';
import style from './SigninButton.css';

const st = classNames.bind(style);

const SigninButton = () => (
  <button type="submit" className={st('signin-button')}>
    로그인하기
  </button>
);

export default SigninButton;
