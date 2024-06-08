import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import { Todo } from '../types/Todo';
import { describe, test, expect, afterEach, vi } from 'vitest';

const mockTodo: Todo = {
  id: 1,
  text: 'Test Todo',
  completed: false,
};

const toggleTodoMock = vi.fn();

describe( 'TodoItem', () => {
  afterEach( cleanup );

  test( 'renders TodoItem', () => {
    render( <TodoItem todo={ mockTodo } toggleTodo={ toggleTodoMock } /> );
    const todoElement = screen.getByText( /Test Todo/i );
    expect( todoElement ).toBeInTheDocument();
  } );

  test( 'calls toggleTodo when checkbox is clicked', () => {
    render( <TodoItem todo={ mockTodo } toggleTodo={ toggleTodoMock } /> );
    const checkbox = screen.getByRole( 'checkbox' );
    fireEvent.click( checkbox );
    expect( toggleTodoMock ).toHaveBeenCalledWith( mockTodo.id );
  } );

  test( 'applies strikethrough style to completed todos', () => {
    const completedTodo = { ...mockTodo, completed: true };
    render( <TodoItem todo={ completedTodo } toggleTodo={ toggleTodoMock } /> );
    const todoElement = screen.getByText( /Test Todo/i );
    expect( todoElement ).toHaveStyle( 'text-decoration: line-through' );
  } );
} );
