import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

       <nav className='flex gap-16 bg-slate-600 text-white'>
        <Link to="/"> <li className='list-none text-3xl p-5'>Home</li> </Link>
        <Link to="/tictactoe"> <li className='list-none text-3xl p-5'>TicTacToe</li> </Link>
        <Link to="/hangman"> <li className='list-none text-3xl p-5'>HangMan</li> </Link>
        <Link to="/wordle"> <li className='list-none text-3xl p-5'>Wordle</li> </Link>
      </nav>

  )
}

export default Navbar
