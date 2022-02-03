import React from 'react';
import { FaHome, FaUserAlt, FaUsers, FaUserGraduate, FaDoorOpen } from "react-icons/fa";
import './Hero.css'
const Hero = ({ handleLogout }) => {
  return <div className='body-hero'>
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
            <span className='icon'><FaUserAlt className='fa' /></span>
            <span className='title'>Perfil</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span className='icon'><FaUsers className='fa' /></span>
            <span className='title'>Cadastrar turmas</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <span className='icon'><FaUserGraduate className='fa' /></span>
            <span className='title'>Alunos</span>
          </a>
        </li>
        <li className='logout'>
          <a href=''  onClick={handleLogout}>
            <span className='icon'><FaDoorOpen className='fa ' /></span>
            <span className='title'>Sair</span>
          </a>
        </li>
      </ul>
    </div>
    
  </div>

  
}

export default Hero;
