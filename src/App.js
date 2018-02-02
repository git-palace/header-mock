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
        mobile_cities: true
      }, {
        title: "Memory Care",
        child: false,
        mobile_cities: true
      }, {
        title: "Nursing Homes",
        child: false,
        mobile_cities: true
      }, {
        title: "Idependent Living",
        child: false,
        mobile_cities: true
      }, {
        title: "More Living Options",
        child: ["Child Item 1", "Child Item 2"]
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
      }
    };

    this.openOtherLangs = this.openOtherLangs.bind(this);
    this.selectLang = this.selectLang.bind(this);
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

  render() {
    return (
      <div className="header">
        <div className="top">
          <div className="menu-btn-container visible-sm">
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

        <div className="bottom">
          <ul className="menu">
            {
              this.state.navItems1.map((menuItem, idx) => {
                return (
                  <li className={"item menu-1 " + (menuItem.child ? "has-child" : "")} key={idx}>
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
                      : null}
                  </li>
                )
              })
            }
            <span className="spliter visible-lg">|</span>
            {
              this.state.navItems2.map((menuItem, idx) => {
                return (
                  <li className="item menu-2" key={idx}>
                    <a><span>{menuItem.title}</span></a>
                  </li>
                )
              })
            }
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
