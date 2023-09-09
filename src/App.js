import { useState } from "react";
import "./App.css";
import Employes from "./components/Employes";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Headers";
import Employees from "./pages/Employees";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./pages/Customers";
import Dictionery from "./pages/Dictionery";
import Defination from "./pages/Defination";
import NotFound from "./pages/NotFound";
import Customer from "./pages/Customer";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/dictionary" element={<Dictionery />}></Route>
          <Route path="/customers/:id" element={<Customer />}></Route>
          <Route path="/definition/:search" element={<Defination />}></Route>
          <Route path="/404" element={<NotFound />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
