import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../Shared";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
function Login() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedin, setloggedin] = useContext(LoginContext);
  // useEffect(() => {
  //   console.log(location.state);
  // }, []);

  function userLogin(params) {
    params.preventDefault();
    const url = baseUrl + "api/token/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        setloggedin(true);
        navigate(
          location?.state?.previousUrl
            ? location.state.previousUrl
            : "/customers"
        );
        // console.log(localStorage);
      })
      .catch();
  }
  return (
    <div>
      {" "}
      <form className="w-full mx-w-sm " id="customer" onSubmit={userLogin}>
        {" "}
        {/* <p class="m-2 block"> ID: {tempcustomer.id}</p> */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/12">
            <label htmlFor="user">Username: </label>
          </div>
          <div className="md:w-3/4">
            <input
              id="user"
              className="bg-gray-200 rounded w-[300px] py-2 px-2 border-3 border-slate-50 leading-tight focus:outline-none  focus:bg-slate-50 focus:border-purple-500"
              type="text"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-4">
          <div className="md:w-1/12">
            <label htmlFor="password">Password: </label>
          </div>
          <div className="md:w-2/4">
            <input
              id="password"
              className="bg-gray-200 rounded w-[300px] py-2 px-2 border-3 border-slate-50 leading-tight focus:outline-none  focus:bg-slate-50 focus:border-purple-500"
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="bg-indigo-500 w-[100px] px-2 py-2 text-white rounded text-center hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
