import React from "react";
import { Helmet } from "react-helmet";

import Header from './../components/Header';
import Footer from './../components/Footer';

import './../styles/global.css'

export default function Home() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8"/>
        <title>Michee Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com"/>
      </Helmet>
      <Header/>
      <div className="content">
        <h1 classs="h1--lead">Besoin d'aide pour vos projets personnels?</h1>
      </div>
      <Footer/>
    </div>
  );
}
