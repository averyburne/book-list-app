import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form'
import Table from './components/Table'
import './App.css';

const App = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [currentBookId, setCurrentBookId] = useState(null)
  const [books, setBooks] = useState([
    {
      bookTitle: "Infinite Jest",
      bookAuthor: "DFW",
      bookIsbn: "999",
      bookId: uuidv4()
    }
  ])

  const isInputInvalid = () => {
    return (
      title.trim() === "" || author.trim() === "" || isbn.trim() === ""
    )
  }
  const clearInputs = () => {
    setTitle('')
    setAuthor('')
    setIsbn('')
  }

  const addBook = () => {
    setBooks([
      ...books, 
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuidv4()
      }
    ])
    console.log('hi')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    clearInputs()

    if (isInputInvalid()) return
    addBook()
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.bookId !== id))
  }

  return (
    <div className="App">
      <div className="container">
        <Form 
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
        />
        <Table 
          books={books}
          removeBook={removeBook}
        />
      </div>
    </div>
  );
}

export default App;
