import React, { useState, useEffect } from 'react';
import { fetchDogs } from './api';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Skeleton,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DogCarousel = () => {
  const [dogs, setDogs] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state
  const cardsPerPage = 3; // Number of cards to display per page

  // Fetch data on initial render and page change
  useEffect(() => {
    setLoading(true); // Start loading
    fetchDogs(page)
      .then((response) => {
        setDogs(response.data);
        setLoading(false); // Data fetched, stop loading
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Stop loading on error
      });
  }, [page]);

  // Handle the next page (forward arrow)
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1); // Increment page and fetch next set of data
  };

  // Handle the previous page (backward arrow)
  const handlePrev = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1); // Decrement page and fetch previous set of data
    }
  };

  return (
    <Box
      sx={{
        padding: 4,
        minHeight: '100vh', // Make sure it covers the full screen vertically
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('https://img.freepik.com/free-vector/cute-animal-paw-print-pattern-background-fauna-fun_1017-44714.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#d5990e', mb: 2, fontWeight: 'bold' }}>
        Dog Breeds
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" gutterBottom sx={{ color: '#805c07', mb: 4, fontWeight: 'bold' }}>
        Everyday is a Dog Day
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={handlePrev} disabled={page === 0}>
          <ArrowBackIosIcon />
        </IconButton>

        {/* Carousel container showing 3 cards per page */}
        <Grid container spacing={1} sx={{ display: 'flex', flexDirection: 'row' }}>
          {loading
            ? // Show skeletons when loading
              Array.from({ length: cardsPerPage }).map((_, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={{
                    height: '400px', 
                    width: '300px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}>
                    <Skeleton variant="rectangular" height={200} />
                    <CardContent>
                      <Skeleton width="80%" />
                      <Skeleton width="60%" />
                      <Skeleton width="40%" />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : // Show cards with actual data
              dogs.slice(0, cardsPerPage).map((dog) => (
                <Grid item key={dog.id} xs={12} sm={6} md={4}>
                  <Card sx={{
                    height: '400px', 
                    width: '300px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    border: '1px solid #ddd',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginRight: '5px' // Minimal distance between cards
                  }}>
                    <CardMedia
                      component="img"
                      image={dog.url}
                      alt={dog.breeds[0]?.name || 'Unknown Breed'}
                      height="200"
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ padding: '16px' }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {dog.breeds[0]?.name || 'Unknown'}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Life Span:</strong> {dog.breeds[0]?.life_span}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Temperament:</strong> {dog.breeds[0]?.temperament}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Bred For:</strong> {dog.breeds[0]?.bred_for}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
        </Grid>

        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DogCarousel;
