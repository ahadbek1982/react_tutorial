import { useState } from "react";
import "../App.css";
import Employes from "../components/Employes";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import Header from "../components/Headers";

function Employees() {
  const showEmployes = true;

  const [employees, setemployes] = useState([
    {
      id: 1,
      name: "Ahadbek",
      role: "Developer",
      img: "https://images.pexels.com/photos/18114933/pexels-photo-18114933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Someone",
      role: "Developer",
      img: "https://images.pexels.com/photos/2965690/pexels-photo-2965690.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Girl",
      role: "Developer",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "Man",
      role: "Developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]);
  function UpdateEmployee(id, newName, newRole) {
    const updated = employees.map((man) => {
      if (id === man.id) {
        // return new emlployee
        return { ...man, name: newName, role: newRole };
      }
      return man;
    });

    setemployes(updated);
  }

  function AddEmploye(name, role, img) {
    const added = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setemployes([...employees, added]);
  }
  return (
    <div className="App bg-gray-400 min-h-screen">
      {/* <Header /> */}
      {showEmployes ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employes
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={UpdateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee add={AddEmploye} />
        </>
      ) : (
        <p>You can't see the employes</p>
      )}
    </div>
  );
}

export default Employees;
