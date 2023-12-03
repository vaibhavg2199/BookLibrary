import React from 'react'
import '../Style/Booklist.css'
const Booklist = ({ books, removeBook }) => {
   
    return (
        <div className='booklist-container' >
            {
                books.map((book, index) => {
                    return (
                        <div key={index} className='booklist1' >
                            <div>{book.title}</div>
                            <div>by {book.author}</div>
                            <div> Year:{book.pyear}</div>
                            <button className='btn' onClick={() => removeBook(index)} style={{ backgroundColor: ' #dc3545' }}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Booklist