import { useState } from "react";
import "./App.css";
import Employes from "./components/Employes";

function App() {
  const showEmployes = true;
  const [role, setrole] = useState("dev");
  return (
    <div className="App">
      {showEmployes ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setrole(e.target.value);
            }}
          />
          <Employes name="Ahadbek" role="Intern" />
          <Employes name="Rustam" role={role} />
          <Employes name="Furkat" />
          <Employes nama="Mumin" />
        </>
      ) : (
        <p>You can't see the employes</p>
      )}
    </div>
  );
}

export default App;
