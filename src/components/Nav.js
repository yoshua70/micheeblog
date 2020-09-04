import React from 'react';
import { Link } from 'gatsby';

import './../styles/Nav.css';
export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav wrapper">
        <Link to="/" className="nav__link">Accueil</Link>
        <Link to="/about" className="nav__link">A propos</Link>
        <Link to="/contact" className="nav__link">Contact</Link>
        <Link to="/blog" className="nav__link">Blog</Link>
      </nav>
    )
  }
}