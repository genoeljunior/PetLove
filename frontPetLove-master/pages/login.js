import Head from 'next/head';
import Image from 'next/image';

import React from 'react';
import { ReactDOM } from 'react-dom';

import TopLogin from '../components/TopLogin';
import Login from '../components/Login'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
        <TopLogin/>        
        <Login/>
        <Footer/>
    </div>
  )
}
