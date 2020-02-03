import React from 'react';
import {menuData} from './menu-data';
import { Link } from 'gatsby';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav 
        className="float-right"
        role="navigation"
        aria-label="main-navigation"
      >
        {/* Hamburger menu */}
        <button
          className={`navbar-burger burger ${this.state.navBarActiveClass}`}
          data-target="navMenu"
          onClick={() => this.toggleHamburger()}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          { menuData.length && (      
              <ul className="menu-items unstyled">
                  { menuData.map (item =>
                      <li key = {item.label}>
                          <Link to={item.url}> {item.label} </Link>
                      </li>
                  ) }
              </ul>
          )}
        </div>
      </nav>
    )
  }
}

export default Navbar
