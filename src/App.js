import { useState } from "react";
import "./App.css";
import Employes from "./components/Employes";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Headers";
import Employees from "./pages/Employees";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customer from "./pages/Customer";
import Dictionery from "./pages/Dictionery";
import Defination from "./pages/Defination";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/dictionary" element={<Dictionery />}></Route>
          <Route path="/defination" element={<Defination />}></Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
