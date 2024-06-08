import React from 'react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ( id: number ) => void;
}

const TodoItem: React.FC<TodoItemProps> = ( { todo, toggleTodo } ) => {
  return (
    <li style={ { textDecoration: todo.completed ? 'line-through' : 'none' } }>
      <input
        type="checkbox"
        checked={ todo.completed }
        onChange={ () => toggleTodo( todo.id ) }
      />
      { todo.text }
    </li>
  );
};

export default TodoItem;
