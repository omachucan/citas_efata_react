/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Paciente from "./Paciente";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ListadoPacientes({
  pacientesCitados,
  setPacienteCitado,
  eliminarPaciente,
}) {
  const valido = pacientesCitados && pacientesCitados.length;

  useEffect(() => {
    if (pacientesCitados.length > 0) {
      console.log("Se agrego un nuevo paciente");
    }
  }, [pacientesCitados]);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {valido ? (
        <>
          <h2 className=" font-black text-3xl text-center">
            Listado Pacientes
          </h2>
          <p className="text-xl mt-5 text-center mb-10">
            Administra tus{" "}
            <span className=" text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>
          {pacientesCitados.map((pacient) => (
            <Paciente
              key={pacient.id}
              pacient={pacient}
              setPacienteCitado={setPacienteCitado}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className=" font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Empieza Agregando Pacientes{" "}
            <span className=" text-indigo-600 font-bold">
              y se mostraran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
