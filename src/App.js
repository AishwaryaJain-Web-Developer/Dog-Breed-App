import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Change BrowserRouter to HashRouter
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
