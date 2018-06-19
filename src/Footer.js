import React, {Component} from 'react'
import './App.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <nav className="footer">
                    <a href="https://www.facebook.com/diane.passey"><button>Find Me on Facebook</button></a>
                    <a href="https://thelifecoachschool.com/"><button>Life Coach School</button></a>
                    <a href="http://www.symbiosiscoaching.com/"><button>Symbiosis Coach School</button></a>
                </nav>
            </div>
        )
    }
}

export default Footer