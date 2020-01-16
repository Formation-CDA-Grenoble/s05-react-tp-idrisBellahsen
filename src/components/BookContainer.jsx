import React from 'react';
import { Book } from '.';

import { bookData } from '../data';

import '../styles/BookContainer.css';

const generateList = () =>
  bookData.map(item =>
    <Book
      booktitle={item.name}
      bookcover={item.picture}
      />
  )
;

export default () =>
  <section className="BookContainer">
    {generateList()}
  </section>
;
