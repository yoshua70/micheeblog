import React from 'react';

import './../styles/Header.css';
import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header wrapper">
        <h1 className="header__sitename">michee allidjinou</h1>
        <Nav/>
      </header>
    );
  }
}