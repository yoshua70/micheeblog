import React from "react";
import { Helmet } from "react-helmet";

import Header from './../components/Header';

export default function About() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8"/>
        <title>A propos | Michée Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com/about"/>
      </Helmet>
      <Header/>
    </div>
  );
}
