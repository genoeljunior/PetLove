import Head from 'next/head';
import Image from 'next/image';

import React from 'react';
import { ReactDOM } from 'react-dom';

import Top from '../components/Top';
import Banner from '../components/Banner'
import QuemSomos from '../components/QuemSomos'
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div >
        <Top/>
        <Banner/>
        <QuemSomos/>
        <CatServico/>
        <Footer/>
    </div>
  )
}
