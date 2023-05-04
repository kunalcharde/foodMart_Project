import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodMartHomePage from './Components/FoodMartHome';
import DetailsPage from './Components/DetailsPage'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FoodMartHomePage />} />
        <Route  path='/details/:id' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

