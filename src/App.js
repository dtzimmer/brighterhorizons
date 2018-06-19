import React from 'react';
import './App.css';
import HomePage from './HomePage'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path ="/" exact component = {HomePage}/>
            <Route path ="/about" component = {About}/>
            <Route path ="/contact" component = {Contact}/>
            <Route path ="/services" component = {Services}/>
        </Switch>
    </BrowserRouter>
)