import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './SigninText.css';

const st = classNames.bind(style);

const SigninText = ({ inputType }) => (
  <div className={st('Signin-text')}>{inputType}</div>
);
SigninText.defaultProps = {
  inputType: 'Plase Set input type!!',
};
SigninText.propTypes = {
  inputType: propTypes.string,
};

export default SigninText;
