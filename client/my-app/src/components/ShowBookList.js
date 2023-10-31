import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import{ Link } from 'react-router-dom';
import BookCard from './BookCard';


function ShowBookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/books')
        .then((res) => {
            setBooks(res.data);
        });
    },[]);

    const bookList = 
    books.length === 0 ? 'there is no book record!'
    : books.map((book, k) =><BookCard book={book} key={k}/>);

    return(
        <div className='ShowBookList' >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 >Books List</h2>
          </div>
        <br />
          
            <br />
            <br />
            <hr />
   
        </div>
        <div >
            <Link
              to='/create-book'
              className='butn '
            >
              + Add New Book
            </Link>
            </div>
        <div className='list'>{bookList}</div>
      </div>
    </div>
    );
}

export default ShowBookList;