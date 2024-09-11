import React, { useState, useEffect } from 'react';
import { fetchDogs } from './api';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Pagination,
  Skeleton,
} from '@mui/material';

const DogTable = () => {
  const [dogs, setDogs] = useState([]);
  const [page, setPage] = useState(1); // Start from page 1
  const [totalPages, setTotalPages] = useState(10); // You can modify based on the API
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    setLoading(true);
    fetchDogs(page - 1) // API uses 0-indexed pages, so subtract 1
      .then(response => {
        setDogs(response.data);
        setTotalPages(Math.ceil(response.total / 10)); // Assuming 10 items per page
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundImage: `url('https://img.freepik.com/free-vector/cute-animal-paw-print-pattern-background-fauna-fun_1017-44714.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#d5990e', mb: 2, fontWeight: 'bold' }}>
        Dog Breeds
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" gutterBottom sx={{ color: '#805c07', mb: 4, fontWeight: 'bold' }}>
        Everyday is a Dog Day
      </Typography>

      <TableContainer component={Paper} sx={{ marginTop: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#d5990e', color: '#fff' }}>
                Image
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#d5990e', color: '#fff' }}>
                Breed
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#d5990e', color: '#fff' }}>
                Location
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#d5990e', color: '#fff' }}>
                Life Span
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#d5990e', color: '#fff' }}>
                Temperament
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#d5990e', color: '#fff' }}>
                Bred For
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    <Skeleton variant="rectangular" width={100} height={100} />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton width="60%" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton width="60%" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton width="60%" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton width="60%" />
                  </TableCell>
                  <TableCell align="center">
                    <Skeleton width="60%" />
                  </TableCell>
                </TableRow>
              ))
            ) : (
            dogs.map(dog => (
              <TableRow
                key={dog.id}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    cursor: 'pointer',
                  },
                }}
              >
                <TableCell align="center">
                  <img
                    src={dog.url}
                    alt={dog.breeds[0]?.name || 'Unknown Breed'}
                    width={100}
                    style={{ borderRadius: '8px' }}
                  />
                </TableCell>
                <TableCell align="center">{dog.breeds[0]?.name || 'Unknown'}</TableCell>
                <TableCell align="center">{dog.breeds[0]?.origin || 'Unknown'}</TableCell>
                <TableCell align="center">{dog.breeds[0]?.life_span}</TableCell>
                <TableCell align="center">{dog.breeds[0]?.temperament || 'Unknown'}</TableCell>
                <TableCell align="center">{dog.breeds[0]?.bred_for || 'Unknown'}</TableCell>
              </TableRow>
            )) ) }
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Pagination
          count={totalPages} // Total number of pages
          page={page} // Current page
          onChange={handlePageChange} // Handle page change
          variant="outlined"
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default DogTable;
