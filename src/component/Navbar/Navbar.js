import React from 'react';
import logo from '../../logo.svg';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo"/>
        <ul className="nav-links">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/tours" className="nav-link active">Tours</a></li>
        </ul>
    </nav>
  )
}
