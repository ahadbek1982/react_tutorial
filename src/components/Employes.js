import React from "react";
import EditEmployee from "./EditEmployee";

function Employes(props) {
  return (
    <>
      <div className=" min-w-[400px] max-w-[400px] m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="object-cover rounded-full h-[100px] w-[100px] first-letter:block mx-auto sm:mx-0 sm:shrink-0"
          src={props.img}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{props.name}</p>
            <p className="text-slate-500 font-medium">{props.role}</p>
          </div>
          <EditEmployee
            key={props.id}
            id={props.id}
            name={props.name}
            role={props.role}
            updateEmployee={props.updateEmployee}
          />
        </div>
      </div>

      {/* <div>Employes {props.name}</div> */}

      {/* <p>{props.role ? props.role : "No role"}</p> */}
      {/* {props.role ? (
        <p className="role">{props.role}</p>
      ) : (
        <p className="norole">No role</p>
      )} */}
    </>
  );
}

export default Employes;
