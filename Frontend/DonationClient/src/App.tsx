// App.tsx
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Donors from './components/Donors';
import Home from './components/Home';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'donors'>('home');

  const navigateToDonors = () => {
    setCurrentView('donors');
  };

  return (
    <>
      {/* <div className='header'>
        <Header />
      </div> */}
      <div className="app-container">
        {currentView === 'home' && <Home navigateToDonors={navigateToDonors} />}
        {currentView === 'donors' && <Donors />}
      </div>
    </>
  );
}

export default App;
