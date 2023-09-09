import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Customers() {
  const [customers, setcustomers] = useState();
  useEffect(() => {
    console.log("Fetching...");
    fetch("http://127.0.0.1:8000/api/customers/")
      .then((response) => response.json())
      .then((data) => {
        setcustomers(data.customers);
        console.log(data);
      });
  }, []);
  return (
    <div className="text-danger">
      <h1> Here are our customer:</h1>
      {customers
        ? customers.map((customer) => {
            return (
              <p key={customer.id}>
                <Link to={"/customers/" + customer.id}>{customer.name}</Link>
              </p>
            );
          })
        : "There no data"}
    </div>
  );
}

export default Customers;
