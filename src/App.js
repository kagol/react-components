import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    const { children, location: { pathname } } = this.props;
    return (
      <div className="app-container">
        <div className="navbar-top">top navbar</div>
        <div className="sidebar-left">
            <ul>
                <li className={pathname==='/'?'active':''}><Link to="/">Ad Detail</Link></li>
                <li className={pathname==='/date-picker'?'active':''}><Link to="/date-picker">Date Picker</Link></li>
                <li className={pathname==='/image-filter'?'active':''}><Link to="/image-filter">Image Filter</Link></li>
                <li className={pathname==='/components'?'active':''}><Link to="/components">Components</Link></li>
            </ul>
        </div>
        <div className="main-content">
          <div className="App">
              {children}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
