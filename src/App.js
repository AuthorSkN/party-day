import React from 'react';
import Content from './components/Content';
import {Link} from 'react-router-dom';
import Local from './local.json'

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/categories">{Local.NAV_CATEGORIES_NAME}</Link></li>
        <li><Link to="/about">{Local.NAV_ABOUT_NAME}</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1><Link to="/">Party Day</Link></h1>
        <Menu/>
        <Content/>
      </header>

    </div>
  );
}

export default App;
