import Home from './Components/Home';
import {   Route, Routes } from 'react-router-dom';
import HangMan from './Components/HangMan/HangMan';
import Wordle from './Components/Wordle/Wordle';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import Layout from './Components/Layout';
import Error from './Components/Error';
// import Layout from './Components/Layout';

function App() {

  return (
  
    <Routes>
 
      <Route path='/' element={<Layout/>} >
        <Route path='/' element={<Home/>} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/hangman" element={<HangMan />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="*" element={<Error />} />
      </Route>

    </Routes>
  
  );
}

export default App;

