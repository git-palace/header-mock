import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      langs: ["us", "ca"],
      sel_lang: "us",
      openedOtherLangs: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      openedOtherLangs: !this.state.openedOtherLangs
    });
  }

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
            <div className={"lang-list " + (this.state.openedOtherLangs ? "opened" : "")} onClick={this.handleClick}>
              <div className="selected text-uppercase ml-auto">
                <span>{this.state.sel_lang}</span>&nbsp;<img src={"/assets/icons/lang-" + this.state.sel_lang + ".png"} alt="lang" />
              </div>

              <ul className="others">
                {
                  this.state.langs.map((lang, idx) => {
                    if (this.state.sel_lang !== lang) {
                      return (
                        <li className="text-uppercase" key={idx}>
                          <span>{lang}</span>&nbsp;<img src={"/assets/icons/lang-" + lang + ".png"} alt="lang" />
                        </li>
                      )
                    }
                  })
                }
              </ul>
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