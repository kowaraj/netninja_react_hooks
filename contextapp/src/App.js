import React from 'react';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar></Navbar>
      <BookList></BookList>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
