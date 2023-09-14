import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import { baseUrl } from "../Shared";

function Customer() {
  const { id } = useParams();
  const [customer, setcustomer] = useState();
  const [notFound, setNotFound] = useState();
  const [tempcustomer, settempcustomer] = useState();
  const navigate = useNavigate();
  const [changed, setchanged] = useState(false);
  useEffect(() => {
    if (!customer) return;
    if (!customer) return;
    let equal = true;
    if (customer.name !== tempcustomer.name) equal = false;
    if (customer.industry !== tempcustomer.industry) equal = false;
    if (equal) setchanged(false);
  });

  const deleteCustomer = () => {
    const url = baseUrl + "api/customers/" + id;
    fetch(url, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong!!!..");
        }
        navigate("/customers/");
      })

      .catch((e) => {
        console.log(e);
      });
    // console.log("deleting ...");
  };

  useEffect(() => {
    const url = baseUrl + "api/customers/" + id;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          // navigate("/404");
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setcustomer(data.customer);
        settempcustomer(data.customer);
      });
  }, []);
  function updateCustomer() {
    const url = baseUrl + "api/customers/" + id;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempcustomer),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setchanged(false);
        console.log(data);
      })
      .catch();
  }

  // function compareCustomer() {
  //   let equal = true;
  //   if (customer.name !== tempcustomer.name) {
  //     equal = false;
  //   }
  //   if (customer.industry !== tempcustomer.industry) {
  //     equal = false;
  //   }
  //   if (equal) {
  //     setchanged(false);
  //   }
  // }

  return (
    <>
      {notFound ? <p>The customer with id {id} was not found </p> : null}
      {customer ? (
        <div>
          {" "}
          <p class="m-2 block"> ID: {tempcustomer.id}</p>
          <input
            class="m-2 block"
            type="text"
            value={tempcustomer.name}
            onChange={(e) => {
              setchanged(true);
              settempcustomer({ ...tempcustomer, name: e.target.value });
            }}
          />
          <input
            class="m-2"
            type="text"
            value={tempcustomer.industry}
            onChange={(e) => {
              setchanged(true);
              settempcustomer({ ...tempcustomer, industry: e.target.value });
            }}
          />
          <br />
          {changed ? (
            <>
              <button
                className="m-2"
                onClick={(e) => {
                  settempcustomer({ ...customer });
                  setchanged(false);
                }}
              >
                Cancel
              </button>{" "}
              <button className="m-2" onClick={updateCustomer}>
                Save
              </button>
            </>
          ) : null}
        </div>
      ) : null}
      <button onClick={deleteCustomer}>Delete</button> <br />
      <Link to={"/customers/"}>Go to back</Link>
    </>
  );
}

export default Customer;
