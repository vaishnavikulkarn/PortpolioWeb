import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './HomePage/Homepage';
import QrCode from './QrCode/QrCode';

function App() {
  return (
   
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/qrcode' element={<QrCode/>}/>
      </Routes>
        
      
    </React.Fragment>
  );
}

export default App;
