import React from 'react';
import './App.css'
import Header from './components/Header';
import Donors from './components/Donors';
import DonorForm from './components/DonorForm';

function App() {

  return (
    <>
    <div>
    <Header/>
    </div>
    <Donors/>
    <DonorForm/>
    </>
  )
}

export default App
