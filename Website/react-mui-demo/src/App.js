import React, {useState, useEffect} from 'react'
import Homepage from "./Sites/Homepage"
import LogIn from "./Sites/LogIn"
import Fragen from './Sites/Fragen'
import SoFunktionierts from './Sites/SoFunktionierts'
import Preise from './Sites/Preise'
import Register from './Sites/Register'
import {Routes, Route} from "react-router-dom"
import Shop from "./Sites/Shop"
import "./App.css"

function App () {
    const [wheel, setWheel] = useState(()=> {
        const storedWheel = localStorage.getItem("wheel");
        return storedWheel ? (storedWheel) :"";
    });
    
    const [loggedInUser, setLoggedInUser] = useState(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        return storedUser ? (storedUser) : "";
    });

    useEffect(() => {
        localStorage.setItem("loggedInUser", loggedInUser.toString());
    }, [loggedInUser])

    useEffect(() => {
        localStorage.setItem("wheel", wheel.toString());
    }, [wheel])

    return(
        <Routes>
            <Route path="/" element={<Homepage loggedInUser={loggedInUser} setWheel={setWheel}/>}/>
            <Route path="/LogIn" element={<LogIn setLoggedInUser={setLoggedInUser}/>}/>
            <Route path="/SoFunktionierts" element={<SoFunktionierts loggedInUser={loggedInUser}/>}/>
            <Route path="/Preise" element={<Preise loggedInUser={loggedInUser}/>}/>
            <Route path="/Fragen" element={<Fragen loggedInUser={loggedInUser}/>}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Shop" element={<Shop loggedInUser={loggedInUser} wheel={wheel}/>}/>
        </Routes>
    )
}

export default App;