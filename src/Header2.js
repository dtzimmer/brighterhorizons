import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

class Header2 extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><a href="#"><Link to ="/">Home</Link></a></li>
                                <li><a href="#"><Link to ="Contact">Contact</Link></a></li>
                                <li><a href="#"><Link to ="About">About</Link></a></li>
                                <li><a href="#"><Link to ="Services">Services</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header2
