import React from 'react';
import { FaHome, FaSortAmountDownAlt, FaSortAmountUpAlt, FaListUl, FaDoorOpen, FaStream, FaRegUser } from "react-icons/fa";
import Home from './Home';

import './Sidebar.css'




const Hero = ({ handleLogout }) => {
  return <div className='body-hero'>
    {/* Sidebar */}
    <div className='navigation'>
      <ul>
        <li>
          <a href='#'>
          
            <span className='icon'><FaHome className='fa' /></span>
            <span className='title'>Inicio</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span className='icon'><FaSortAmountUpAlt className='fa' /></span>
            <span className='title'>Cadastrar Receitas</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span className='icon'><FaSortAmountDownAlt className='fa' /></span>
            <span className='title'>Cadastrar Despesas</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span className='icon'><FaListUl className='fa' /></span>
            <span className='title'>Despesas e Receitas</span>
          </a>
        </li>
        <li className='logout'>
          <a href='' onClick={handleLogout}>
            <span className='icon'><FaDoorOpen className='fa ' /></span>
            <span className='title'>Sair</span>
          </a>
        </li>
      </ul>
    </div>
    <Home />
  </div>



}

export default Hero;
