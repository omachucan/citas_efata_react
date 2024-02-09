/* eslint-disable react/prop-types */
function Paciente({ pacient, setPacienteCitado, eliminarPaciente }) {
  const { paciente, doctor, email, fecha, observaciones, id } = pacient;
  // handleElimarPaciente
  const handleElminarPaciente = () => {
    const respuesta = confirm("¿Desea Elimar este Paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre:{""} <span className=" font-normal normal-case">{paciente}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Doctor: <span className=" font-normal normal-case">{doctor}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email: <span className=" font-normal normal-case">{email}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha Cita: <span className=" font-normal normal-case">{fecha}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Observaciones:{" "}
        <span className=" font-normal normal-case">{observaciones}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 text-white uppercase hover:bg-indigo-700 rounded-lg"
          type="button"
          onClick={() => setPacienteCitado(pacient)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 text-white uppercase hover:bg-red-700 rounded-lg"
          type="button"
          onClick={handleElminarPaciente}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
