import React from 'react';

import { NavButton } from '.';
import { buttonData } from '../data';

import '../styles/NavBar.css';


const generateButtons = data =>
  data.map(item =>
    <li key={item}>
      <NavButton>
        {item}
      </NavButton>
    </li>
  )
;

export default () =>
  <nav className="Navbar">
    <ul className = "Navbar-buttons">
        <p> Jean-Neymar</p>
      {generateButtons(buttonData)}
    </ul>
  </nav>
;
