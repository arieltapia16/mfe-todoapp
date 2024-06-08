import React from 'react';
import TodoApp from './components/TodoApp';

const App: React.FC = () => {
  return (
    <div style={styles}>
      <TodoApp />
    </div>
  );
};

export default App;

const styles = { 
    display: 'flex',
   "flex-direction": 'column',
    alignItems: 'center', 
    width: 1000
   }; 