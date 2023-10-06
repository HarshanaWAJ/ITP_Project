import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "../css/form.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Books from './Books';

function BookDetails() {

  const history = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    author: '',
    noofbooks: '',
    image: ''
  });
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:8080/books/${id}`);
    const book = response.data;
    setInputs({
      name: book.name,
      description: book.description,
      author: book.author,
      noofbooks: book.noofbooks,
      image: book.image
    });
    setChecked(book.available);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history('/books'))
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios.put(`http://localhost:8080/books/${id}`, {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      noofbooks: Number(inputs.noofbooks),
      image: String(inputs.image),
      available: Boolean(checked),
    }).then(res => res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <Box classname="form"
          display="flex"
          flexDirection="column"
          justifyContent={'center'}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto">

          <FormLabel>Name</FormLabel>

      
          <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          />

        <FormLabel>author</FormLabel>

          <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          />

<FormLabel>Description</FormLabel>

          <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          />

<FormLabel>No of Books</FormLabel>

          <TextField
          value={inputs.noofbooks}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="noofbooks"
          />

<FormLabel>Image link</FormLabel>

          <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          />


          <FormControlLabel
            control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
            label="Available" />

          <Button variant='contained' type='submit'>Update Book</Button>

        </Box>
      </form>
    </div>
  )
}

export default BookDetails;