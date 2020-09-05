import React from 'react';
import { Link } from 'gatsby';

import './../styles/Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button className="button">
        <Link to={this.props.linkTo} className="button__link">{this.props.buttonName}</Link>
      </button>
    )
  }
}