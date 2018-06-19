import React, {Component} from 'react'
import './App.css';
import Header2 from "./Header2";
import Footer from "./Footer";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header2/>
                <div className="homepagebackground">
                    <article>
                        <h1>Brighter Horizons</h1>
                    </article>
                    <div>
                        <p>
                            The distance between your <br/>dreams and reality <br/> is called action.
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default HomePage

