import React from "react";
import { Helmet } from "react-helmet";

import Header from './../components/Header';
import Footer from './../components/Footer';

export default function Home() {
  return (
    <div className="application wrapper">
      <Helmet>
        <meta charset="utf-8"/>
        <title>Michee Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com"/>
      </Helmet>
      <Header/>
      <div className="content">
      </div>
      <Footer/>
    </div>
  );
}
