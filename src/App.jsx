import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  // States para mostrar en ListadoPacientes
  const [pacientesCitados, setPacientesCitados] = useState(
    () => JSON.parse(localStorage.getItem("PacientesCitados")) ?? []
  );
  // State para poder editarlo
  const [pacienteCitado, setPacienteCitado] = useState({});

  // Se ejecuta una sola vez , cuando el arreglo [] esta vacio .

  // useEffect(() => {
  //   const obtenerStorage = () => {
  //     const pacienteCitadoLS =
  //       JSON.parse(localStorage.getItem("PacientesCitados")) ?? [];
  //     console.log(pacienteCitadoLS);
  //     setPacientesCitados(pacienteCitadoLS);
  //   };

  //   obtenerStorage();
  // }, []);

  useEffect(() => {
    const llenarStorage = () => {
      localStorage.setItem(
        "PacientesCitados",
        JSON.stringify(pacientesCitados)
      );
    };
    llenarStorage();
  }, [pacientesCitados]);

  const eliminarPaciente = (id) => {
    console.log("Eliminar el Paciente", id);

    const nuevoPacientesCitados = pacientesCitados.filter(
      (paciente) => paciente.id !== id
    );
    console.log(nuevoPacientesCitados);
    setPacientesCitados(nuevoPacientesCitados);
  };

  return (
    <div className=" container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientesCitados={pacientesCitados}
          setPacientesCitados={setPacientesCitados}
          pacienteCitado={pacienteCitado}
          setPacienteCitado={setPacienteCitado}
        />
        <ListadoPacientes
          pacientesCitados={pacientesCitados}
          setPacienteCitado={setPacienteCitado}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
