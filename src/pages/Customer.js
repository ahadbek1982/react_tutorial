import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import { baseUrl } from "../Shared";
import { LoginContext } from "../App";

function Customer() {
  const { id } = useParams();
  const [customer, setcustomer] = useState();
  const [notFound, setNotFound] = useState();
  const [tempcustomer, settempcustomer] = useState();
  const navigate = useNavigate();
  const [changed, setchanged] = useState(false);
  const [error, setError] = useState();
  const location = useLocation();
  const [loggedin, setloggedin] = useContext(LoginContext);
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
    fetch(url, {
      method: "DELETE",
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
        if (!response.ok) {
          throw new Error("Something went wrong!!!..");
        }
        navigate("/customers/");
      })

      .catch((e) => {});
    // console.log("deleting ...");
  };

  useEffect(() => {
    const url = baseUrl + "api/customers/" + id;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
    })
      .then((response) => {
        if (response.status === 404) {
          // navigate("/404");
          setNotFound(true);
        } else if (response.status === 401) {
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
        setcustomer(data.customer);
        settempcustomer(data.customer);
      });
  }, []);
  function updateCustomer(e) {
    e.preventDefault();
    const url = baseUrl + "api/customers/" + id;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      body: JSON.stringify(tempcustomer),
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
        if (!response.ok) throw new Error("Something went wrong");
        return response.json();
      })
      .then((data) => {
        setchanged(false);
      })
      .catch((e) => {
        setError(e.message);
      });
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
    <div className="mb-2">
      {notFound ? <p>The customer with id {id} was not found </p> : null}
      {customer ? (
        <div className="m-2">
          <form
            className="w-full mx-w-sm "
            id="customer"
            onSubmit={updateCustomer}
          >
            {" "}
            {/* <p class="m-2 block"> ID: {tempcustomer.id}</p> */}
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/12">
                <label htmlFor="name">Name: </label>
              </div>
              <div className="md:w-3/4">
                <input
                  id="name"
                  className="bg-gray-200 rounded w-[300px] py-2 px-2 border-3 border-slate-50 leading-tight focus:outline-none  focus:bg-slate-50 focus:border-purple-500"
                  type="text"
                  value={tempcustomer.name}
                  onChange={(e) => {
                    setchanged(true);
                    settempcustomer({ ...tempcustomer, name: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/12">
                <label htmlFor="industry">Industry: </label>
              </div>
              <div className="md:w-2/4">
                <input
                  id="industry"
                  className="bg-gray-200 rounded w-[300px] py-2 px-2 border-3 border-slate-50 leading-tight focus:outline-none  focus:bg-slate-50 focus:border-purple-500"
                  type="text"
                  value={tempcustomer.industry}
                  onChange={(e) => {
                    setchanged(true);
                    settempcustomer({
                      ...tempcustomer,
                      industry: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </form>
          <br />
          {changed ? (
            <>
              <div className="mb-2">
                <button
                  form="customer"
                  className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                  onClick={(e) => {
                    settempcustomer({ ...customer });
                    setchanged(false);
                  }}
                >
                  Cancel
                </button>{" "}
                <button
                  form="customer"
                  className="bg-purple-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </>
          ) : null}
          <div>
            <button
              onClick={deleteCustomer}
              className="bg-slate-400 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
            >
              Delete
            </button>{" "}
          </div>
          <br />
          {error ? <p>{error}</p> : null}
        </div>
      ) : null}
      <Link to={"/customers/"}>
        {" "}
        <button className="no-uderline bg-purple-600 text-white  font-bold py-2 px-4 rounded">
          🢀 Go to back
        </button>
      </Link>
    </div>
  );
}

export default Customer;
