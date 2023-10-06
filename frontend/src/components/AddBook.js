import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import React, { useState } from 'react'
import "./css/form.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name:'',
    description:'',
    author:'',
    noofbooks:'',
    image:''

  });

  const[checked, setchecked] = useState(false)
  const handleChange = (e) => {
      setInputs((prevState)=>({
          ...prevState,
          [e.target.name]: e.target.value,
      }));
        //console.log(e.target.name,"Value",e.target.value);
      
    };
    
  const sendRequest = async() =>{
    await axios.post("http://localhost:8080/books", {
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      noofbooks:Number(inputs.noofbooks),
      image:String(inputs.image,),
      available:Boolean(checked),
    }).then(res => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(() => history('/books'))
  };
  return ( 
    <div>
  {inputs && <form onSubmit={handleSubmit}>
    
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
      onChange= {handleChange}
      margin="normal"   
      fullWidth variant="outlined" 
      name="name"/>
    
    <FormLabel>Author</FormLabel>
    
    <TextField 
      value={inputs.author}
      onChange= {handleChange}
      margin="normal" 
      fullWidth variant="outlined" 
      name="author"/>
    
    <FormLabel>Description</FormLabel>
    
    <TextField 
        value={inputs.description}
        onChange= {handleChange}
        margin="normal" 
        fullWidth 
        variant="outlined" 
        name="description"

    />

    <FormLabel>No of Books</FormLabel>
    <TextField 
        value={inputs.noofbooks}
        onChange= {handleChange}
        type='number'
        margin="normal" 
        fullWidth variant="outlined" 
        name="noofbooks"
    />
     <FormLabel>Image Link</FormLabel>
     <TextField 
        value={inputs.image}
        onChange= {handleChange}
        margin="normal" 
        fullWidth variant="outlined" 
        name="image"
    />
    
    <FormControlLabel 
        control={<Checkbox checked={checked} onChange={()=> setchecked(!checked)}/>} 
        label="Available" />
    
    <Button variant='contained' type='submit'>Add Book</Button>
    
    </Box>
  </form>
}
  </div>

  );
};

export default AddBook;