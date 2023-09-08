
import './App.css';

import React, { Component } from 'react'
import Navbar from './container/Navbar';
import Newshome from './container/Newshome';
import {
  BrowserRouter as Main,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Main>
           <Navbar/>
           <React.StrictMode>
           <Routes>
              <Route exact strict path='/' element={<Newshome key={"general"} category="general"/>}></Route>
              <Route exact strict path='/business'  element={<Newshome key={"business"} category="business"/>}></Route>
              <Route exact strict path='/entertainment'element={<Newshome key={"entertaunment"} category="entertainment"/>}></Route>
              <Route exact strict path='/health' element={<Newshome key={"health"} category="health"/>}></Route>
              <Route exact strict path='/science' element={<Newshome key={"science"} category="science"/>}></Route>
              <Route exact strict path='/sports'  element={<Newshome key={"sports"} category="sports"/>}></Route>
              <Route exact strict path='/technology'  element={<Newshome key={"technology"} category="technology"/>}></Route>
           </Routes>
           </React.StrictMode>
        </Main>
      </div>
    )
  }
}


