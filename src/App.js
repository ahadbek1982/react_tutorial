import "./App.css";
import Employes from "./components/Employes";

function App() {
  const showEmployes = true;
  return (
    <div className="App">
      {showEmployes ? (
        <>
          <Employes name="Ahadbek" role="Intern" />
          <Employes name="Rustam" />
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
