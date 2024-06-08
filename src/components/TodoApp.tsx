import React, { useState } from 'react';
import TodoList from './TodoList';
import { Todo } from '../types/Todo';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoApp: React.FC = () => {
  const [ todos, setTodos ] = useLocalStorage<Todo[]>( 'todos', [] );
  const [ filter, setFilter ] = useState<string>( 'All' );
  const [ input, setInput ] = useState<string>( '' );

  const addTodo = () => {
    if ( input.trim() === '' ) return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos( [ ...todos, newTodo ] );
    setInput( '' );
  };

  const toggleTodo = ( id: number ) => {
    setTodos(
      todos.map( todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const filteredTodos = todos.filter( todo => {
    if ( filter === 'Active' ) return !todo.completed;
    if ( filter === 'Completed' ) return todo.completed;
    return true;
  } );

  return (
    <div>
      <h1>Todo List</h1>
      <div style={styles.addButton}>
        <input
          type="text"
          value={ input }
          onChange={ e => setInput( e.target.value ) }
          placeholder="Add a new task"
          data-testId="addNewTask"
        />
        <button onClick={ addTodo }>Add</button>
      </div>
      <div style={ styles.filters }>
        <button onClick={ () => setFilter( 'All' ) }>All</button>
        <button onClick={ () => setFilter( 'Active' ) }>Active</button>
        <button onClick={ () => setFilter( 'Completed' ) }>Completed</button>
      </div>
      <TodoList todos={ filteredTodos } toggleTodo={ toggleTodo } />
    </div>
  );
};

export default TodoApp;

const styles = {
  addButton: {
    display: 'flex',
    marginBottom: 20,
    gap: 2
  },
  filters: {
    display: 'flex',
    gap: 5
  }
}