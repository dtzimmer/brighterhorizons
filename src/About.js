import React, {Component} from 'react'
import './App.css';
import Header2 from './Header2'

class About extends Component {
    render() {
        return (
            <div>
                <Header2/>
                <div className="aboutpagebackground">
                    <article>
                        <h1>About</h1>
                    </article>
                </div>
            </div>
        )
    }
}

export default About