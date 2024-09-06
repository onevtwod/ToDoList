import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../image/logo.png';

const Header = () => {
  return (
    <div>
        <header>
            <div className='row'>
              <img src={logo} alt="Logo" width="50" height="auto"></img>
              <h1 className='title'>Mingle</h1>
            </div>
            
            <nav>
                <Link className='home-link' to="/">Home</Link>
                <Link className='add-task-link' to="/add-task">Add Task</Link>
            </nav>
        </header>
    </div>
  )
}

export default Header