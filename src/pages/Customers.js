import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import { baseUrl } from "../Shared";

function Customers() {
  const [customers, setcustomers] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("Fetching...");
    fetch("http://127.0.0.1:8000/api/customers/")
      .then((response) => response.json())
      .then((data) => {
        setcustomers(data.customers);
        console.log(data);
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
      <ul>
        {customers
          ? customers.map((customer) => {
              return (
                <li key={customer.id}>
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
