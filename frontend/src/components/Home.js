import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import './css/home.css';

const Home = () => {
  return (
    <Box className="home-container">
      <Box className="home-header">
        <Typography variant="h2" className="home-title">
          Welcome to the Library!
        </Typography>
        <Typography variant="body1" className="home-subtitle">
          Browse our collection of books and manage your borrowing history.
        </Typography>
        <Link to="/books">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<LibraryBooksIcon />}
            size="large"
            className="home-button"
          >
            View Books
          </Button>
        </Link>
        <Link to="/login">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<LibraryBooksIcon />}
            size="large"
            className="home-button"
          >
            Login
          </Button>
        </Link>
      </Box>
      <Box className="home-image"></Box>
    </Box>
  )
};

export default Home;