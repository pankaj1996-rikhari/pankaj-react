import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const WebLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default WebLayout;
