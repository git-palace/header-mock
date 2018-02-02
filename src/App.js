import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      langs: ["us", "ca"],
      sel_lang: "us",
      openedOtherLangs: false,
      navItems1: [{
        title: "Assisted Living",
        child: false,
        mobile_cities: true,
        childMenuOpened: false
      }, {
        title: "Memory Care",
        child: false,
        mobile_cities: true,
        childMenuOpened: false
      }, {
        title: "Nursing Homes",
        child: false,
        mobile_cities: true,
        childMenuOpened: false
      }, {
        title: "Idependent Living",
        child: false,
        mobile_cities: true,
        childMenuOpened: false
      }, {
        title: "More Living Options",
        child: ["Child Item 1", "Child Item 2"],
        childMenuOpened: false
      }],
      navItems2: [{
        title: "Planning & Advice",
        child: false
      }, {
        title: "How our service works",
        child: false
      }],
      navItems3: {
        us: [{
          title: "New York"
        }, {
          title: "Los Angeles"
        }, {
          title: "Chicago"
        }, {
          title: "Dallas"
        }, {
          title: "Houston"
        }, {
          title: "Philadelphia"
        }, {
          title: "Miami"
        }, {
          title: "Atlanta"
        }, {
          title: "Boston"
        }, {
          title: "San Jose"
        }, {
          title: "Phoenix"
        }, {
          title: "Seattle"
        }, {
          title: "Minneapolis"
        }, {
          title: "San Diego"
        }, {
          title: "Denver"
        }],
        ca: [{
          title: "Toronto"
        }, {
          title: "Vancouver"
        }, {
          title: "Calgary"
        }, {
          title: "Edmonton"
        }, {
          title: "Ottawa"
        }, {
          title: "Mississauga"
        }, {
          title: "Winnipeg"
        }, {
          title: "London"
        }, {
          title: "Surrey"
        }, {
          title: "Hamilton"
        }]
      },
      openMobileMenu: false
    };

    this.openOtherLangs = this.openOtherLangs.bind(this);
    this.selectLang = this.selectLang.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  openOtherLangs() {
    this.setState({
      openedOtherLangs: !this.state.openedOtherLangs
    });
  }

  selectLang(lang) {
    this.setState({
      sel_lang: lang
    });
  }

  toggleMobileMenu() {
    this.setState({
      openMobileMenu: !this.state.openMobileMenu
    })
  }

  openChildMenu(idx) {
    let val = this.state.navItems1;
    val[idx].childMenuOpened = !val[idx].childMenuOpened;
    this.setState({
      navItems1: val
    })
  }

  render() {
    return (
      <div className="header">
        <div className="top">
          <div className="menu-btn-container visible-sm" onClick={this.toggleMobileMenu}>
            <a>Menu</a>
          </div>

          <div className="logo visible-lg">
            <img src="https://brandongaille.com/wp-content/uploads/2013/07/Blue-Sky-Studios-Company-Logo.jpg" alt="logo" />
          </div>

          <div className="contact-info">
            <div className={"visible-lg-block lang-list " + (this.state.openedOtherLangs ? "opened" : "")} onClick={this.openOtherLangs}>
              <div className="selected text-uppercase ml-auto">
                <span>{this.state.sel_lang}</span>&nbsp;<img src={"/assets/icons/lang-" + this.state.sel_lang + ".png"} alt="lang" />
              </div>

              <ul className="others">
                {
                  this.state.langs.map((lang, idx) => {
                    if (this.state.sel_lang !== lang) {
                      return (
                        <li className="text-uppercase" key={idx} onClick={() => this.selectLang(lang)}>
                          <span>{lang}</span> <img src={"/assets/icons/lang-" + lang + ".png"} alt="lang" />
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </div>

            <div className="phone">
              <h1 className="phone-number">
                <i className="icon icon-telephone visible-lg"></i>
                <span>877-753-7751</span>
              </h1>

              <p className="desc">Talk&nbsp;<span className="visible-lg">to a local advisor&nbsp;</span>for FREE</p>
            </div>
          </div>
        </div>

        <div className={"bottom " + (this.state.openMobileMenu ? " opened" : " closed")}>
          <div className="menu-btn-container visible-sm close">
            <a onClick={this.toggleMobileMenu}><span>&#10006;</span></a>

            <div className={"visible-sm-block lang-list " + (this.state.openedOtherLangs ? "opened" : "")} onClick={this.openOtherLangs}>
              <div className="selected text-uppercase ml-auto">
                <span>{this.state.sel_lang}</span>&nbsp;<img src={"/assets/icons/lang-" + this.state.sel_lang + ".png"} alt="lang" />
              </div>

              <ul className="others">
                {
                  this.state.langs.map((lang, idx) => {
                    if (this.state.sel_lang !== lang) {
                      return (
                        <li className="text-uppercase" key={idx} onClick={() => this.selectLang(lang)}>
                          <span>{lang}</span> <img src={"/assets/icons/lang-" + lang + ".png"} alt="lang" />
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </div>
          </div>

          <div className="search visible-sm">
            <input className="" placeholder="Search by City or Zip" />
          </div>

          <h1 className="page-title visible-sm text-uppercase">Home</h1>

          <ul className="menu">
            {
              this.state.navItems1.map((menuItem, idx) => {
                return (
                  <li className={"item menu-1 " + (menuItem.child ? " has-child" : "") + (menuItem.childMenuOpened ? " opened" : "") + (menuItem.mobile_cities ? " has-cities" : "")} key={idx} onClick={() => this.openChildMenu(idx)}>
                    <a><span>{menuItem.title}</span></a>

                    {menuItem.child ?
                      <ul>
                        {
                          menuItem.child.map((item, c_idx) => {
                            return (
                              <li className="child item" key={c_idx}><a><span>{item}</span></a></li>
                            )
                          })
                        }
                      </ul>
                      : menuItem.mobile_cities ? <ul>
                        {
                          this.state.navItems3[this.state.sel_lang].map((item, key) => {
                            return (
                              <li className="child item" key={key}><a>{item.title}</a></li>
                            )
                          })}
                      </ul> : null}
                  </li>
                )
              })
            }
            <span className="spliter visible-lg">|</span>
            <hr className="vsible-sm" />
            {
              this.state.navItems2.map((menuItem, idx) => {
                return (
                  <li className="item menu-2" key={idx}>
                    <a><span>{menuItem.title}</span></a>
                  </li>
                )
              })
            }
            <hr className="vsible-sm" />

            <li className="item menu-1 login visible-sm-block">
              <a><span>Log In</span></a>
            </li>
          </ul>
        </div>

        <div className="sub-menu visible-lg">
          <ul>
            {
              this.state.navItems3[this.state.sel_lang].map((item, key) => {
                return (
                  <li key={key}><a>{item.title}</a></li>
                )
              })
            }
          </ul>
        </div>
      </div >
    );
  }
}

export default App;
