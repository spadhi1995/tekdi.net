import React, { Fragment } from 'react';
import {menuData} from './menu-data';
import MainMenu from './menu';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
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
              navBarActiveClass: 'mobilemenu-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
  return (
    <Fragment>
     <button
          className={`navbar-burger burger float-right ${this.state.navBarActiveClass}`}
          data-target="navMenu"
          onClick={() => this.toggleHamburger()}
        >
          <span></span>
          <span></span>
          <span></span>
      </button>
      <div className={`navbar-menu ${this.state.navBarActiveClass}`} >
        <MainMenu items={menuData} />
      </div>
      
    </Fragment>
  )}
};
export default Navbar;