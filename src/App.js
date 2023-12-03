import { useState } from 'react';
import './App.css';
import Books from './Components/Books'
import Booklist from './Components/Booklist'
function App() {

  const [books, setBooks] =useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook])
  }

  const removeBook = (index) => {
    const updateBook = [...books]
    updateBook.splice(index, 1)
    setBooks(updateBook)
  }

  return (
  <div className='App'>
   <div className='books'>
   <Books handleAddBook={handleAddBook}/>
   </div>
    <div className='booklist'>
    <Booklist books={books} removeBook={removeBook}/>
    </div>
  </div>
  );
}

export default App;
