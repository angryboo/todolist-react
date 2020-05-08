import React from 'react';
import classNames from 'classnames/bind';
import style from './SigninTitle.css';

const st = classNames.bind(style);

const SigninTitle = () => <div className={st('Signin-title')}>Sign in</div>;

export default SigninTitle;
