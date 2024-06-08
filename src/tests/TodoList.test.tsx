import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { Todo } from '../types/Todo';
import { describe, test, expect, afterEach, vi } from 'vitest';

const mockTodos: Todo[] = [
  { id: 1, text: 'First Todo', completed: false },
  { id: 2, text: 'Second Todo', completed: true },
];

const toggleTodoMock = vi.fn();

describe( 'TodoList', () => {
  afterEach( cleanup );

  test( 'renders a list of todos', () => {
    render( <TodoList todos={ mockTodos } toggleTodo={ toggleTodoMock } /> );
    const firstTodo = screen.getByText( /First Todo/i );
    const secondTodo = screen.getByText( /Second Todo/i );
    expect( firstTodo ).toBeInTheDocument();
    expect( secondTodo ).toBeInTheDocument();
  } );

  test( 'calls toggleTodo when any todo item checkbox is clicked', () => {
    render( <TodoList todos={ mockTodos } toggleTodo={ toggleTodoMock } /> );
    const checkboxes = screen.getAllByRole( 'checkbox' );
    fireEvent.click( checkboxes[ 0 ] );
    fireEvent.click( checkboxes[ 1 ] );
    expect( toggleTodoMock ).toHaveBeenCalledTimes( 2 );
    expect( toggleTodoMock ).toHaveBeenCalledWith( mockTodos[ 0 ].id );
    expect( toggleTodoMock ).toHaveBeenCalledWith( mockTodos[ 1 ].id );
  } );
} );
