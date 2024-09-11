import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVNuFO0Wd4Aes1qe_T8EfGEzTvi55FBvUcA&s')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        }}
      ></Box>
      
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: 'Poppins', mb: 2 }}>
          Welcome to Dogs World
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: 'Roboto', mb: 4 }}>
          Discover your favorite dog breeds!
        </Typography>

        <Box>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/table"
            sx={{
              mr: 2,
              padding: '10px 20px',
              backgroundColor: '#FFA726',
              '&:hover': {
                backgroundColor: '#FB8C00',
              },
            }}
          >
            Table View
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/carousel"
            sx={{
              padding: '10px 20px',
              backgroundColor: '#42A5F5',
              '&:hover': {
                backgroundColor: '#1E88E5',
              },
            }}
          >
            Carousel View
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
