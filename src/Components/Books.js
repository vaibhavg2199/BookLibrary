import React,{useState} from 'react'
import '../Style/Books.css'
const Books = ({handleAddBook}) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pyear, setPyear] = useState('');

    const addBook = () =>{
        const newBook = {title, author, pyear};
        if(newBook.title==="" && newBook.author==="" && newBook.pyear===""){
          alert('Please Enter Valid Book Details')
        }
       else{
        handleAddBook(newBook)
        setTitle('');
        setAuthor('');
        setPyear('');
       }
    }
  return (
   <div className='container'>
    <h1>Books Library</h1>
     <div className='books'>
        <input type='text' placeholder='Book Title' className='input' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type='text' placeholder='Author'className='input' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <input type='number' placeholder='Publication Year' className='input' value={pyear} onChange={(e)=>setPyear(e.target.value)}/>
        <button onClick={addBook} className='btn'>Add Book</button>
    </div>
   </div>
  )
}

export default Books