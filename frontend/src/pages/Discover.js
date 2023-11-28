import React from 'react'
import Global from '../components/global/styles/global';
import Header from '../components/global/Header';
import NavBar from '../components/global/NavBar';
import ButtonGroup from '../components/discoverComponents/button';

function Discover() {
  return (
    <div className='container'>
      <Global />
      <div className='header'>
        <header>
          <Header />
        </header>
        <div className='content'>
          <nav>
            <NavBar />
          </nav>
          <div>
            <ButtonGroup />
          </div>
          <main>
            <h2>Heissulivei vaan</h2>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Discover