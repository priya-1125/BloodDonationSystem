import React from 'react';
import Donors from './components/Donors';
import './App.css'
import Header from './components/Header';

function App() {

  return (
    <>
    <div>
    <Header/>
    </div>
     <Donors/>
    </>
  )
}

export default App


// const App: React.FC = () =>
// {
//   return (
//     <Router>

//     </Router>
//   )
// }