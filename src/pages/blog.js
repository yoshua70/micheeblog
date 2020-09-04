import React from "react"
import { Helmet } from "react-helmet";

import Header from './../components/Header';

export default function Blog() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8"/>
        <title>Blog | Michée Allidjinou</title>
        <link rel="canonical" href="https://micheeallidjinou.com/blog"/>
      </Helmet>
      <Header/>
    </div>
  );
}
