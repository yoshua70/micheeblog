import React from 'react';
import { Link } from 'gatsby';

import './../styles/Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__sitename">michee allidjinou</h1>
        <nav className="header__nav">
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
    );
  }
}