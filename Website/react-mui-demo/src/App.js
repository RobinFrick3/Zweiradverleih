import React from 'react'
import Homepage from "./Sites/Homepage"
import LogIn from "./Sites/LogIn"
import Fragen from './Sites/Fragen'
import SoFunktionierts from './Sites/SoFunktionierts'
import Preise from './Sites/Preise'
import {Routes, Route} from "react-router-dom"
import "./App.css"

function App () {
    return(
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/LogIn" element={<LogIn />}/>
            <Route path="/SoFunktionierts" element={<SoFunktionierts />}/>
            <Route path="/Preise" element={<Preise />}/>
            <Route path="/Fragen" element={<Fragen />}/>
        </Routes>
    )
}

export default App;