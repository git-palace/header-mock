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
        child: false
      }, {
        title: "Memory Care",
        child: false
      }, {
        title: "Nursing Homes",
        child: false
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
          <div className="search-container ml-auto">
            <div className="search">
              <input className="min-width-250px" type="text" placeholder="Search by City or Zip" />
              <i className="icon icon-search"></i>
            </div>
          </div>

          <div className="contact-info">
            <div className={"lang-list " + (this.state.openedOtherLangs ? "opened" : "")} onClick={this.openOtherLangs}>
              <div className="selected text-uppercase ml-auto">
                <span>{this.state.sel_lang}</span>&nbsp;<img src={"/assets/icons/lang-" + this.state.sel_lang + ".png"} alt="lang" />
              </div>

              <ul className="others">
                {
                  this.state.langs.map((lang, idx) => {
                    if (this.state.sel_lang !== lang) {
                      return (
                        <li className="text-uppercase" key={idx} onClick={() => this.selectLang(lang)}>
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
            <span className="spliter">|</span>
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

        <div className="sub-menu">
          {
            this.state.navItems3[this.state.sel_lang].map((item, key) => {
              return (
                <a key={key}>{item.title}</a>
              )
            })
          }
        </div>
      </div >
    );
  }
}

export default App;