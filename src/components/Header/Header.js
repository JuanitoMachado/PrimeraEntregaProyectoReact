import React from 'react';
import './Header.css';
import img from './logo.jpg';

const Header = () => {
  return (
    <div className='Header'> 
        <img src={img} alt='logo' />
        <h1>
            EL BOLICHE DE JUANELO
        </h1>
        <h2>
          Todo lo que necesitas en un solo lugar...
        </h2>

    </div>
  )
}

export default Header

