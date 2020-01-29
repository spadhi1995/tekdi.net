import React from "react"
import {useEffect} from 'react';
import {Link} from "gatsby";
import Navbar from "./navbar";
// import "../../layout/common.css";
import "./header.scss";
import { withPrefix } from 'gatsby'

const Header = () => {
    useEffect(() => {
        window.onscroll = function() {myFunction()};

        function myFunction() {
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("header").className = "header-fix";
          } else {
            document.getElementById("header").className = "";
          }
        }
    });
    return(
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 header-inner">
                        <div className="logo logo-lg float-left">
                            <Link to="/">
                                <img className="logo-white-text" src={`${withPrefix('/')}img/logo/logo-white-txt-lg.png`} alt="logo" />
                                <img className="logo-black-text" src={`${withPrefix('/')}img/logo/logo-black-txt-lg.png`} alt="logo" />
                            </Link>
                        </div>
                        <div className="logo logo-sm float-left">
                            <Link to="/">
                                <img className="logo-white-text" src={`${withPrefix('/')}img/logo/logo-white-txt-sm.png`} alt="logo" />
                                <img className="logo-black-text" src={`${withPrefix('/')}img/logo/logo-black-txt-sm.png`} alt="logo" />
                            </Link>
                        </div>
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;