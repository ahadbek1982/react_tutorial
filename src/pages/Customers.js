import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import { baseUrl } from "../Shared";
import { LoginContext } from "../App";

function Customers() {
  const [loggedin, setloggedin] = useContext(LoginContext);
  const [customers, setcustomers] = useState();
  const [show, setShow] = useState(false);
  const url = baseUrl + "api/customers/";
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
    })
      .then((response) => {
        if (response.status === 401) {
          setloggedin(false);
          navigate("/login", {
            state: {
              previousUrl: location.pathname,
            },
          });
        }
        return response.json();
      })
      .then((data) => {
        setcustomers(data.customers);
        // console.log(data);
      });
  }, []);
  function toogleShow() {
    setShow(!show);
  }

  function addnew(name, industry) {
    const data = { name: name, industry: industry };
    const url = baseUrl + "api/customers/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        toogleShow();
        console.log(data);
        setcustomers([...customers, data.customer]);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="text-danger">
      <h1> Here are our customer:</h1>
      <ul className="bg-gray-200 border">
        {customers
          ? customers.map((customer) => {
              return (
                <li
                  key={customer.id}
                  className="border border-slate-900 my-2 px-2 hover:bg-cyan-600 hover:text-white "
                >
                  <Link to={"/customers/" + customer.id}>{customer.name}</Link>
                </li>
              );
            })
          : "There no data"}
      </ul>
      <AddCustomer add={addnew} show={show} toogleShow={toogleShow} />
    </div>
  );
}

export default Customers;
