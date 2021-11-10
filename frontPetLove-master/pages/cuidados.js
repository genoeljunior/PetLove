import Head from 'next/head';
import Image from 'next/image';

import React from 'react';
import { ReactDOM } from 'react-dom';

import Top from '../components/Top';
import BannerCuidado from '../components/BannerCuidado'
import Cuidados from '../components/Cuidados'
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div >
        <Top/>
        <BannerCuidado/>
        <Cuidados/>
        <CatServico/>
        <Footer/>
    </div>
  )
}
