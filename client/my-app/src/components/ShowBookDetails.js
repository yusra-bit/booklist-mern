import React, { useState, useEffect} from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowBookDetails(props) {
    const [book, setBook] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            setBook(res.data);
        })
        .catch((err) => {
            console.log('Error from ShowBookDetails');
        });
    }, [id]);

    const onDeleteClick = (id) => {
        axios
        .delete(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            navigate('/');
        })
        .catch((err) => {
            console.log('Error form ShowBookDetails_deleteClick');
        });
    };

    const BookItem = (
        <div>
        <table className='table table-hover table-dark'>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Title</td>
              <td>{book.title}</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Author</td>
              <td>{book.author}</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>ISBN</td>
              <td>{book.isbn}</td>
            </tr>
         {/*   <tr>
              <th scope='row'>4</th>
              <td>Publisher</td>
              <td>{book.publisher}</td>
            </tr>*/}
           <tr>
              <th scope='row'>5</th>
              <td>Published Date</td>
              <td>{book.published_date}</td>
            </tr>
            <tr>
              <th scope='row'>6</th>
              <td>Description</td>
              <td>{book.description}</td>
            </tr>
          </tbody>
        </table>
      </div>  
    );

    return (
        <div className='ShowBookDetails'>
        <div className='container'>
          <div className='row'>
           
          
            <div className=' m-auto'>
              <h1 className='display-4 text-center'>Book's Record</h1>
              <p className='lead text-center'>View Book's Info</p>
              <hr /> <br />
              <div>
            
            <Link to='/' className='butn '>
              Show Book List
            </Link>
          </div>
          <br />
            </div>
            <div >{BookItem}</div>
            <div >
              <button
                type='button'
                className='btn btn-outline-danger '
                onClick={() => {
                  onDeleteClick(book._id);
                }}
              >
                Delete Book
              </button>
            </div>
<br />
            <div className=' m-auto'>
              <Link
                to={`/edit-book/${book._id}`}
                className='btn btn-outline-warning '
              >
                Edit Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
    
}

export default ShowBookDetails;