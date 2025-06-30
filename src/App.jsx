// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import Development from './pages/development';
import Challenge from './pages/challenge';
import Hire from './pages/hire';
import Comunity from './pages/comunity';
import FormDetails from './pages/formDetails';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="app-development" element={<Development />} />
          <Route path="challenges" element={<Challenge />} />
          <Route path="hire-developer" element={<Hire />} />
          <Route path="community" element={<Comunity />} />
          <Route path="/formDetails" element={<FormDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
