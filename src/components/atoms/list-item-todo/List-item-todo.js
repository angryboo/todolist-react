import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './List-item-todo.css';

const st = classNames.bind(style);

const ListItemTodo = ({ todoitem }) => (
  <div className={st('list-item-todo')}>{todoitem.todo}</div>
);

ListItemTodo.defaultProps = {
  todoitem: {},
};
ListItemTodo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todoitem: propTypes.object,
};

export default ListItemTodo;
