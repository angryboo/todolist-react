import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Todo-item.css';
import ListItemTodo from '../../atoms/list-item-todo/List-item-todo';
import ListItemInput from '../../atoms/list-item-input/List-item-input';
import ListItemRemove from '../../atoms/list-item-remove/List-item-remove';

const st = classNames.bind(style);

// eslint-disable-next-line object-curly-newline
const TodoItem = ({ item, setBoard, board, todo, setTodo }) => (
  <>
    <div className={st('todo-item')}>
      <div className={st('todo-item-title')}>
        <div className={st('todo-item-text')}>{item.boardName}</div>
        <div className="remove-btn-layout">
          <ListItemRemove todoId={item.id} board={board} setBoard={setBoard} />
        </div>
      </div>
      <ul className={st('todo')}>
        {todo
          .filter(({ boardId }) => boardId === item.id)
          .map((todoitem, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${item.id}-${i}`}>
              <ListItemTodo todoitem={todoitem} />
            </li>
          ))}
      </ul>
      <div className={st('todo-input')}>
        <ListItemInput
          setBoard={setBoard}
          todoId={item.id}
          board={board}
          todo={todo}
          setTodo={setTodo}
        />
      </div>
    </div>
  </>
);

TodoItem.defaultProps = {
  item: {},
  setBoard: () => {},
  board: [],
  todo: [],
  setTodo: () => {},
};
TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: propTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  setBoard: propTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  board: propTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  todo: propTypes.array,
  setTodo: propTypes.func,
};

export default TodoItem;
