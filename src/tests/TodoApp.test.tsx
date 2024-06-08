import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import TodoApp from '../components/TodoApp';
import { describe, test, expect, afterEach } from 'vitest';

describe( 'TodoApp', () => {
  afterEach( cleanup );
  test( 'renders TodoApp', () => {
    render( <TodoApp /> );
    const linkElement = screen.getByText( /Todo List/i );
    expect( linkElement ).toBeInTheDocument();
  } );

  test( 'adds a new todo', () => {
    render( <TodoApp /> );
    const inputElement = screen.getByTestId( 'addNewTask' );
    fireEvent.change( inputElement, { target: { value: 'New Task' } } );
    fireEvent.click( screen.getByText( /Add/i ) );
    expect( screen.getByText( /New Task/i ) ).toBeInTheDocument();
  } );
} );
