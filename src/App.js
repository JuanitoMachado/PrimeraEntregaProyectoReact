import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import NavBar from './components/NavBar/NavBar';
import HomeIcon from '@mui/icons-material/Home';
import CartWidget from './components/CartWidget/CartWitdget';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemCounter from './components/ItemCounter/ItemCounter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import BebidasConAlcohol from './views/BebidasConAlcohol/BebidasConAlcohol';
import Bebidas from './views/Bebidas/Bebidas';



const App = () => {
      return (
      <div>

         <Router>
            <div className='App'>
               <Header className='Center' />
               <NavBar/>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/BebidasConAlcohol' element={<BebidasConAlcohol />} />
                  <Route path='/Bebidas' element={<Bebidas />} />
                  <Route path='/detail/:id'/>
               </Routes>
            </div>
         </Router>

          <div className='Center'>

          <ItemCounter/>
      

          </div>


       </div>
          
    );
};

export default App;
