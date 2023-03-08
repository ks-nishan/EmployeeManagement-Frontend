import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import CreateEmployee from "../src/components/CreateEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateEmployee />} />
              <Route path="/edit/:id" element={<EditEmployee />} />
              <Route path="/employee/:id" element={<EmployeeDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
