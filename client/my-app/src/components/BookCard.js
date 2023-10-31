import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';


const BookCard = (props) => {
    const book = props.book;

    return(

        <div className=' shadow p-3 mb-5 bg-white rounded'>
          
        <img
          src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
          alt='Books'
          height={200}
        />
        <div className='desc'>
          <h2 >
            <Link className="book-title" to={`/show-book/${book._id}`}>{book.title}</Link>
          </h2>
          <h3>{book.author}</h3>
          
        </div>
      </div>
    );
};

export default BookCard;
