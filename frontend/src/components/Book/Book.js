import { Button } from '@mui/material';

import React from 'react'
import "../css/Book.css"
import { Link, useNavigate } from 'react-router-dom';
import AddBook from '../AddBook';
import axios from 'axios';




const Book = (props) => {
  
    const history = useNavigate()
    const {_id,name,author,description,available,image} = props.book;
    const deleteHandler = async () => {
     await axios.delete(`http://localhost:8080/books/${_id}`)
      .then(res=>res.data)
      .then(()=>history("/books"));
    }
  return (
   
    <div className='book-card'>
       
        <img src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>{available}</h2>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:"auto"}}>Update</Button>
        <Button onClick={deleteHandler} to={`/books/${_id}`} sx={{mt:"auto"}}>Delete</Button>
        

 </div>
  );
};

export default Book;