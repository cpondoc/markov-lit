import React from 'react';
import '../style/index.css';

function Header() {
  return (
    <div id="header" className="container">
      <h1>Markov Literature</h1>
      <p id="description"><span role="img" aria-label="write">✍🏼</span> Emulating popular poets using <a href="https://brilliant.org/wiki/markov-chains/">markov chains</a>.</p>
    </div>
  );
}

export default Header;