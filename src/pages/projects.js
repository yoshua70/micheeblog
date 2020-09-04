import React from "react"
import { Helmet } from "react-helmet";

import Header from './../components/Header';

export default function Contact() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8"/>
        <title>Projects | Michée Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com/projects"/>
      </Helmet>
      <Header/>
    </div>
  );
}