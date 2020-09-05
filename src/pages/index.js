import React from "react";
import { Helmet } from "react-helmet";

import Header from './../components/Header';
import Footer from './../components/Footer';
import Button from './../components/Button';

import './../styles/global.css'

export default function Home() {
  return (
    <div className="application">
      <Helmet>align-self: flex-start;
        <meta charset="utf-8"/>
        <title>Michee Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com"/>
      </Helmet>
      <Header/>
      <div className="content">
        <h1 className="h1--lead">Besoin d'aide pour vos projets personnels?</h1>
        <h2 className="h2--lead">Salut, je suis Michée Allidjinou, développeur web fullstack à votre service!</h2>
        <Button linkTo="/about" buttonName="Apprenez à me connaitre!"/>
        <Button linkTo="/contact" buttonName="Contactez moi!"/>
      </div>
      <Footer/>
    </div>
  );
}
