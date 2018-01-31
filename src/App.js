import React, { Component } from 'react';
import './App.css';
import lang_us from './assets/icons/lang-us.png';

class App extends Component {
  render() {
    return (
      <div className="header">
        <div className="top">
          <div className="search-container ml-auto">
            <div className="search">
              <input className="min-width-250px" type="text" placeholder="Search by City or Zip" />
              <i className="icon icon-search"></i>
            </div>
          </div>

          <div className="contact-info">
            <div className="lang-list">
              <div className="selected">
                <span>US</span>&nbsp;<img src={lang_us} alt="lang-us" />
              </div>
            </div>

            <div className="phone">
              <h1 className="phone-number">
                <i className="icon icon-telephone"></i>
                <span>123-456-7890</span>
              </h1>

              <p className="desc">Talk to a local advisor for FREE</p>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;