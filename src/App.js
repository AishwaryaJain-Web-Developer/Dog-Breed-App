import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import DogTable from './component/DogTable';
import DogCarousel from './component/DogCarousel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table" element={<DogTable />} />
        <Route path="/carousel" element={<DogCarousel />} />
      </Routes>
    </Router>
  );
};

export default App;
