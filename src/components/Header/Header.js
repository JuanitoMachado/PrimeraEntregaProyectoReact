import React from 'react';
import './Header.css';
import img from './logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'> 
    			<Link to='/'>
           <img src={img} alt='logo' />
         </Link>

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

