// App.tsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Donors from './components/Donors';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Donors />
      </div>
    </>
  );
}

export default App;