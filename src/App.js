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
        <div className="header-top">
          <div className="mobile-menu-btn-container visible-sm" onClick={this.toggleMobileMenu}>
            <a className="mobile-menu-btn mobile-menu-btn__open">Menu</a>
          </div>

          <div className="header-logo visible-lg">
            <img className="header-logo__img" src="https://brandongaille.com/wp-content/uploads/2013/07/Blue-Sky-Studios-Company-Logo.jpg" alt="logo" />
          </div>

          <div className="header-contact-info">
            <div className="visible-lg-block lang-list " onClick={this.openOtherLangs}>
              <div className={"lang-list--selected text-uppercase ml-auto" + (this.state.openedOtherLangs ? " lang-list--selected--opened" : "")}>
                <span className="lang-list__span">{this.state.sel_lang}</span>&nbsp;<img className="lang-list__img" src={"/assets/icons/lang-" + this.state.sel_lang + ".png"} alt="lang" />
              </div>

              <ul className={"lang-list-others " + (this.state.openedOtherLangs ? "lang-list-others--opened" : "lang-list-others--closed")}>
                {
                  this.state.langs.map((lang, idx) => (this.state.sel_lang !== lang) ?
                    <li className="lang-list__li text-uppercase" key={idx} onClick={() => this.selectLang(lang)}>
                      <span className="lang-list__span">{lang}</span> <img className="lang-list__img" src={"/assets/icons/lang-" + lang + ".png"} alt="lang" />
                    </li> : null)
                }
              </ul>
            </div>

            <div className="phone">
              <h1 className="phone__number">
                <i className="icon phone__icon visible-lg"></i>
                <span>877-753-7751</span>
              </h1>

              <p className="phone__desc">Talk&nbsp;<span className="visible-lg">to a local advisor&nbsp;</span>for FREE</p>
            </div>
          </div>
        </div>

        <div className={"header-bottom " + (this.state.openMobileMenu ? " header-bottom--opened" : " header-bottom--closed")}>
          <div className="mobile-menu-btn-container mobile-menu-btn__close-container visible-sm close">
            <a className="mobile-menu-btn mobile-menu-btn__close" onClick={this.toggleMobileMenu}><span>&#10006;</span></a>

            <div className="visible-sm-block lang-list " onClick={this.openOtherLangs}>
              <div className={"lang-list--selected text-uppercase ml-auto" + (this.state.openedOtherLangs ? " lang-list--selected--opened" : "")}>
                <span className="lang-list__span">{this.state.sel_lang}</span>&nbsp;<img className="lang-list__img" src={"/assets/icons/lang-" + this.state.sel_lang + ".png"} alt="lang" />
              </div>

              <ul className={"lang-list-others " + (this.state.openedOtherLangs ? "lang-list-others--opened" : "lang-list-others--closed")}>
                {
                  this.state.langs.map((lang, idx) => (this.state.sel_lang !== lang) ?
                    <li className="lang-list__li text-uppercase" key={idx} onClick={() => this.selectLang(lang)}>
                      <span className="lang-list__span">{lang}</span> <img className="lang-list__img" src={"/assets/icons/lang-" + lang + ".png"} alt="lang" />
                    </li> : null)
                }
              </ul>
            </div>
          </div>

          <div className="search visible-sm">
            <input className="search__input" placeholder="Search by City or Zip" />
          </div>

          <h1 className="page-title visible-sm text-uppercase">Home</h1>

          <ul className="menu parent_menu">
            {
              this.state.navItems1.map((menuItem, idx) => {
                return (
                  <li className={
                    "parent_menu__item menu__item menu-1 " +
                    (
                      menuItem.child || menuItem.mobile_cities ? (
                        menuItem.child ? (menuItem.childMenuOpened ? "menu__item--has-child menu__item--has-child--opened" : "menu__item--has-child") : (menuItem.childMenuOpened ? "menu__item--has-cities menu__item--has-cities--opened" : "menu__item--has-cities")
                      ) : ""
                    )
                  } key={idx} onClick={() => this.openChildMenu(idx)}>
                    <a className={"menu__item__link parent_menu__item_link " + (menuItem.child ? " parent_menu__item_link--has-child" : "parent_menu__item_link--not-has-child ") + (menuItem.childMenuOpened ? " parent_menu__item_link--opened" : "")}><span>{menuItem.title}</span></a>

                    {menuItem.child ?
                      <ul className={"sub-menu sub-menu__normal" + (menuItem.childMenuOpened ? " sub-menu__normal--opened sub-menu--opened" : "")}>
                        {
                          menuItem.child.map((item, c_idx) => {
                            return (
                              <li className="sub-menu__item sub-menu__item--has-child menu__item" key={c_idx}><a className="menu__item__link sub-menu__item__link"><span>{item}</span></a></li>
                            )
                          })
                        }
                      </ul>
                      : menuItem.mobile_cities ? <ul className={"sub-menu sub-menu__cities visible-sm-block " + (menuItem.childMenuOpened ? " sub-menu__cities--opened sub-menu--opened" : "")}>
                        {
                          this.state.navItems3[this.state.sel_lang].map((item, key) => {
                            return (
                              <li className=" sub-menu__item sub-menu__item--has-cities menu__item" key={key}><a className=" sub-menu__item__link">{item.title}</a></li>
                            )
                          })}
                      </ul> : null}
                  </li>
                )
              })
            }
            <span className="spliter visible-lg">|</span>
            <hr className="visible-sm" />
            {
              this.state.navItems2.map((menuItem, idx) => {
                return (
                  <li className="menu__item menu-2" key={idx}>
                    <a className="parent_menu__item_link parent_menu__item_link--not-has-child menu__item__link"><span>{menuItem.title}</span></a>
                  </li>
                )
              })
            }
            <hr className="visible-sm" />

            <li className="menu__item menu-2 visible-sm-block">
              <a className="parent_menu__item_link parent_menu__item_link--not-has-child menu__item__link"><span>Log In</span></a>
            </li>
          </ul>
        </div>

        <div className="sub-menu--cities-container visible-lg">
          <ul className="sub-menu--cities">
            {
              this.state.navItems3[this.state.sel_lang].map((item, key) => {
                return (
                  <li className="sub-menu--cities__item" key={key}><a className="sub-menu--cities__link">{item.title}</a></li>
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
