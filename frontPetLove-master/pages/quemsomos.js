import Head from 'next/head';
import Image from 'next/image';

import React from 'react';
import { ReactDOM } from 'react-dom';

import Top from '../components/Top';
import BannerQuemSomos from '../components/BannerQuemSomos'
import QuemSomos from '../components/QuemSomos'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div >
        <Top/>
        <BannerQuemSomos/>
        <QuemSomos/>
        <Footer/>
    </div>
  )
}
