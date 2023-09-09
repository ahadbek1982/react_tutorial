import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function Customer() {
  const { id } = useParams();
  const [customer, setcustomer] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/customers/" + id;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          navigate("/404");
        }
        return response.json();
      })
      .then((data) => {
        setcustomer(data.customer);
      });
  }, []);
  return (
    <>
      {customer ? (
        <div>
          {" "}
          <p key={customer.id}>{customer.name}</p> <p>{customer.industry}</p>{" "}
        </div>
      ) : null}
      <Link to={"/customers/"}>Go to back</Link>
    </>
  );
}

export default Customer;
