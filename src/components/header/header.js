import React from "react"
import {useEffect} from 'react';
import {Link} from "gatsby";
import Navbar from "./navbar";
// import "../../layout/common.css";
import "./header.css";
import { withPrefix } from 'gatsby'

const Header = () => {
    useEffect(() => {
        window.onscroll = function() {myFunction()};

        function myFunction() {
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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
                        <div className="logo float-left">
                            <Link to="/">
                                <img src={`${withPrefix('/')}img/tekdi-logo.png`} alt="logo" />
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