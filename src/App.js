import { createContext, useEffect, useState } from "react";
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
import Login from "./pages/Login";
import { baseUrl } from "./Shared";

export const LoginContext = createContext();

function App() {
  useEffect(() => {
    setInterval(() => {
      if (localStorage.refresh) {
        const url = baseUrl + "api/token/refresh/";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: localStorage.refresh,
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            localStorage.access = data.access;
            localStorage.refresh = data.refresh;
          });
      }
    }, 1000 * 60 * 3);
  }, []);
  const [loggedin, setloggedin] = useState(localStorage.access ? true : false);
  return (
    <LoginContext.Provider value={[loggedin, setloggedin]}>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/employees" element={<Employees />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/dictionary" element={<Dictionery />}></Route>
            <Route path="/customers/:id" element={<Customer />}></Route>
            <Route path="/definition/:search" element={<Defination />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Header>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
