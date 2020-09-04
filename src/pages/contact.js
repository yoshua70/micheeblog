import React from "react"
import { Helmet } from "react-helmet";

import Header from './../components/Header';
import Footer from './../components/Footer';

export default function Contact() {
  return (
    <div className="application wrapper">
      <Helmet>
        <meta charset="utf-8"/>
        <title>Contact | Michée Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com/contact"/>
      </Helmet>
      <Header/>
      <Footer/>
    </div>
  );
}
