import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import ToDo from "../ToDo";
import Weather from "../Weather";

class Main extends Component {
  render() {
    return <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/toDo" element={<ToDo/>} />
        <Route path="/weather" element={<Weather/>}/>
      </Routes>
      
    </main>;
  }
}

export default Main;
