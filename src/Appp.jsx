import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"


import {Redirect, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Navbar from './Navbar'
import Footer from './Footer'



const Appp=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact  path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact  path="/contact" component={Contact}/>
        <Redirect to="/"/>

        </Switch>
        <Footer/>
        


        </>
    )
}
export default Appp