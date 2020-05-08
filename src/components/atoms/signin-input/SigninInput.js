import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './SigninInput.css';

const st = classNames.bind(style);

const SigninInput = ({ inputType, event }) => {
  const [_type] = useState(inputType);
  const inputRef = useRef();
  const changeInput = () => {
    event(inputRef.current.value);
  };

  return (
    <input
      type={_type === 'password' ? 'password' : 'text'}
      onChange={changeInput}
      className={st('input')}
      ref={inputRef}
    />
  );
};

SigninInput.defaultProps = {
  inputType: 'Plase Set input type!!',
  event: () => {},
};
SigninInput.propTypes = {
  inputType: propTypes.string,
  event: propTypes.func,
};

export default SigninInput;
