import React from 'react';
import Content from './components/Content';
import {Link} from 'react-router-dom';
import Local from './local.json'

function Menu() {
  return (
    <nav>
      <span className="menu-symbol" href="javascript:void(0);" tabindex="1"></span>
      <ul className="menu">
        <li className="menu-item"><Link to="/categories">{Local.NAV_CATEGORIES_NAME}</Link></li>
        <li className="menu-item"><Link to="/about" >{Local.NAV_ABOUT_NAME}</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <Menu/>
        <h1><Link to="/" className="logo">Party Day</Link></h1>
      </header>
      <Content/>
    </div>
  );
}

export default App;
