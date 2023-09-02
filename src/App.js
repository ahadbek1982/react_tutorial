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
          <div className="flex flex-wrap justify-center">
            <Employes
              name="Ahadbek"
              role="Intern"
              img="https://images.pexels.com/photos/18114933/pexels-photo-18114933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employes
              name="Rustam"
              role={role}
              img="https://images.pexels.com/photos/18185492/pexels-photo-18185492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employes name="Furkat" />
            <Employes nama="Mumin" />
          </div>
        </>
      ) : (
        <p>You can't see the employes</p>
      )}
    </div>
  );
}

export default App;
