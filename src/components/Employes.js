import React from "react";

function Employes(props) {
  return (
    <>
      <div>Employes {props.name}</div>

      <p>{props.role ? props.role : "No role"}</p>
      {props.role ? (
        <p className="role">{props.role}</p>
      ) : (
        <p className="norole">No role</p>
      )}
    </>
  );
}

export default Employes;
