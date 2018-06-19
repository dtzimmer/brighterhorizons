import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <section>
                <div className="navbar">
                    <Link to ="/"><a href="">Home</a></Link>
                    <Link to ="Contact"><a href="">Contact</a></Link>
                    <Link to ="About"><a href="">About</a></Link>
                    <Link to ="Services"><a href="">Services</a></Link>
                </div>
            </section>
        )
    }
}

export default Header
