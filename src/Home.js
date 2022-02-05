import React from 'react';
import './Home.css'
import { FaWallet, FaSortAmountDownAlt, FaSortAmountUpAlt, FaListUl, FaDoorOpen, FaStream, FaRegUser } from "react-icons/fa";
import List from './components/List';

function Home() {
  return <div className='home'>
    <h2 className='h2-home'>Visão Geral</h2>
    <section className='cards'>
      <div className='card'>
        <div className='card-income'>
          <FaSortAmountUpAlt className='icon-home' />
          <h2>Receita</h2>
          <p>R$2000,00</p>
          <a><span>Ver mais</span></a>
        </div>
      </div>
      <div className='card'>
        <div className='card-balance'>
          <FaWallet className='icon-home'/>
          <h2>Saldo</h2>
          <p>R$2000,00</p>
          <a><span>Ver mais</span></a>
        </div>
      </div>
      <div className='card'>
        <div className='card-amount'>
          <FaSortAmountDownAlt className='icon-home'/>
          <h2>despesa</h2>
          <p>R$2000,00</p>
          <a><span>Ver mais</span></a>
        </div>
      </div>
    </section>
    <section className='list-home'>
    <List/>
    </section>

  </div>



}

export default Home;
