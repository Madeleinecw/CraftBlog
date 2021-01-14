import React, {useState, useEffect} from "react";
import Request from "../helpers/request"
import PostContainer from "./PostContainer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from "../components/NavBar"
import KnittingContainer from '../components/KnittingContainer'
import EmbroideryContainer from '../components/EmbroideryContainer'
import About from '../components/About'


const MainContainer = () => {

    const [crafts, setCrafts] = useState([]);

    const getCrafts = () => {
        fetch(`http://localhost:1337/projects`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setCrafts(data));
    }

    useEffect(()=> {
        getCrafts();
    }, [crafts])


    if(!crafts) {
        return null
    }
    
    return (
        <Router>
        <div>
            <NavBar className="nav-bar" />
            <Switch>
                  <KnittingContainer path="/tags/1" crafts={crafts} />
                  <EmbroideryContainer path="/tags/2" crafts={crafts} />
                  <Route path="/about" component={About} />
                  <PostContainer path="/" crafts={crafts} />
            </Switch>
            
        </div>
        </Router>
    )

}

export default MainContainer;