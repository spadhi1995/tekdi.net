import React from 'react';
import {menuData} from './menu-data';
import { Link } from 'gatsby';

const activeStyle = {
  color: '#00d0d2',
}
const timeoutLength = 400

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      mouseOverButton: false,
      mouseOverMenu: false,
      mouseOverSubButton: false,
      mouseOverSubMenu: false,
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

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  }

  enterButton = () => {
    this.setState({ mouseOverButton: true })
  }

  leaveButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverButton: false })
    }, timeoutLength)
  }

  enterMenu = () => {
    this.setState({ mouseOverMenu: true })
  }

  leaveMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false })
    }, timeoutLength)
  }

  enterSubButton = () => {
    this.setState({ mouseOverSubButton: true })
  }

  leaveSubButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubButton: false })
    }, timeoutLength)
  }

  enterSubMenu = () => {
    this.setState({ mouseOverSubMenu: true })
  }

  leaveSubMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubMenu: false })
    }, timeoutLength)
  }

  render() {
    const open = this.state.mouseOverButton || this.state.mouseOverMenu
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
                  {/* { menuData.map (item =>
                      <li key = {item.label}>
                          <Link to={item.url} activeStyle={activeStyle}> {item.label} </Link>
                      </li>
                  ) } */}
                  {menuData.map(link =>
                  link.items ? (
                    <React.Fragment key={link.label}>
                      <li key={link.label} className="parent" activeStyle={activeStyle}
                      >
                        <Link
                          onMouseEnter={this.enterButton}
                          onMouseLeave={this.leaveButton}
                          to={link.url}
                          // style={
                          //   open
                          //     ? {
                          //         backgroundColor: `#0f65b2`,
                          //         color: `#fff`
                          //       }
                          //     : { backgroundColor: `transparent` }
                          // }
                        >
                          {link.label}
                        </Link>
                        <ul className="dropdown-menu"
                          // style={
                          //   open
                          //     ? {
                          //         display: `block`
                          //       }
                          //     : { display: `none` }
                          // }
                          onMouseEnter={this.enterMenu}
                          onMouseLeave={this.leaveMenu}
                        >
                          {link.items.map(sublink =>
                            sublink.items ? (
                              <React.Fragment key={sublink.label}>
                                <li
                                  key={sublink.label}
                                >
                                  <Link
                                    onMouseEnter={this.enterSubButton}
                                    onMouseLeave={this.leaveSubButton}
                                    to={sublink.url}
                                    activeStyle={activeStyle}
                                  >
                                    {sublink.label}
                                  </Link>
                                </li>
                              </React.Fragment>
                            ) : (
                              <li key={sublink.label}>
                                <Link to={sublink.url} activeStyle={activeStyle}>{sublink.label}</Link>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    </React.Fragment>
                  ) : (
                    <li key={link.label}>
                      <Link to={link.url} activeStyle={activeStyle}>
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
          )}
        </div>
      </nav>
    )
  }
}

export default Navbar
