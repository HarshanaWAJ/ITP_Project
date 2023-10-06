import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import "../css/form.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function DeleteBook() {

  const history = useNavigate();
  const { id } = useParams();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await axios.delete(`http://localhost:8080/books/${id}`);
    history('/books');
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Are you sure you want to delete this book?
      </Typography>

      <Box classname="form"
        display="flex"
        flexDirection="column"
        justifyContent={'center'}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto">

        <Button variant='contained' color="error" onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete Book"}
        </Button>

      </Box>
    </div>
  )
}

export default DeleteBook;
