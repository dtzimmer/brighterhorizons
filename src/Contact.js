import React, {Component} from 'react';
import './App.css';
import Header2 from './Header2';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header2/>
                <div className="contactpagebackground">
                    <article>
                        <h1>Contact</h1>
                    </article>
                </div>
            </div>
        )
    }
}

export default Contact