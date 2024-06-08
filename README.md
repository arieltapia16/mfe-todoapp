# React Micro Frontend Todo List

## Overview

This is a standalone React Micro Frontend (MFE) component encapsulating a fully functional todo list application. It features todo creation, status toggling, persistence using localStorage, and filtering by status.

## Setup Instructions

1. **Clone the repository:**
    ```sh
    git clone
    cd react-mfe-todo
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the application:**
    ```sh
    npm run dev
    ```

4. **Run tests:**
    ```sh
    npm test
    ```

## Design and Architectural Choices

- **Component Structure**: The app is divided into small, reusable components for maintainability.
- **State Management**: Used React's built-in state management to keep the solution simple.
- **TypeScript**: Ensured type safety and better development experience.
- **Testing**: Included unit tests for core functionality using Jest and React Testing Library.
- **Micro Frontend Consideration**: Designed to be easily integrated into various host applications with clear prop/data communication patterns.

## Edge Cases and Error Handling

- **localStorage Unavailability**: Provided warnings and fallback mechanisms for localStorage errors.
- **Invalid Input**: Prevented empty todo creation and ensured robust state updates.
