import React from 'react';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar></Navbar>
      <BookList></BookList>
      <ThemeToggle></ThemeToggle>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
