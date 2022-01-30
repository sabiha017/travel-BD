// import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
//import About from './components/pages/About'
import Home from './components/pages/Home'
import Cards from "./components/Cards"


function App() {
    return (
        <>
        <Router>
            <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Destinations' component={Cards} />
        </Switch>
            
        </Router>
            
        </>
    )
}

export default App
