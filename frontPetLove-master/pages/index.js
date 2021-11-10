import Head from 'next/head';
import Image from 'next/image';

import React from 'react';
import { ReactDOM } from 'react-dom';

import Top from '../components/Top';
import Banner from '../components/Banner'
import Oqf from '../components/Oquefazer'
import CardAdocao from '../components/CardAdocao'
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'

// ReactDOM.render(<Top/>, document.getElementById('root'))
export default function Home() {
  return (
    <div >
        <Top/>
        <Banner/>
        <Oqf/>
        <CardAdocao/>
        <CatServico/>
        <Footer/>
    </div>
  )
}