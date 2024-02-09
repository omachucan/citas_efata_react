/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Errores from "./Errores";

function Formulario({
  pacientesCitados,
  setPacientesCitados,
  pacienteCitado,
  setPacienteCitado,
}) {
  const [paciente, setPaciente] = useState("");
  const [doctor, setDoctor] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [btnPacientes, setBtnPacientes] = useState("Agregar Pacientes");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacienteCitado).length > 0) {
      // console.log(pacienteCitado);
      const { paciente, doctor, email, fecha, observaciones } = pacienteCitado;
      setPaciente(paciente);
      setDoctor(doctor);
      setEmail(email);
      setFecha(fecha);
      setObservaciones(observaciones);
      setBtnPacientes("Editar Paciente");
    }
  }, [pacienteCitado]);

  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36);

    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del Formulario
    if ([paciente, doctor, email, fecha, observaciones].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setBtnPacientes("Agregar Pacientes");
    // console.log("Todos llenos");

    // Objeto Paciente
    const objetoPaciente = {
      paciente,
      doctor,
      email,
      fecha,
      observaciones,
      // id: generarId(),
    };

    if (pacienteCitado.id) {
      // Nuevo Objeto con el Id de Paciente
      objetoPaciente.id = pacienteCitado.id;
      //
      const objetoPacienteEditado = pacientesCitados.map((paciente) => {
        if (pacienteCitado.id === paciente.id) {
          return objetoPaciente;
        }
        return paciente;
      });

      setPacientesCitados(objetoPacienteEditado);
      setPacienteCitado({});
      console.log(objetoPacienteEditado);
      console.log("Editando");
    } else {
      (objetoPaciente.id = generarId()),
        setPacientesCitados([...pacientesCitados, objetoPaciente]);
    }

    // Reiniciar el Formulario

    setPaciente("");
    setDoctor("");
    setEmail("");
    setFecha("");
    setObservaciones("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className=" font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className=" text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {/* Se Muestra el mensaje de Error */}

        {/* {error && <Errores mensaje={"Todos los campos son obligatorios"} />} */}

        {error && (
          <Errores>
            <p>Todos los campos son obligatorios</p>
          </Errores>
        )}

        <div className="mb-5">
          <label
            htmlFor="paciente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Paciente
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de Paciente"
            id="paciente"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="doctor"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Doctor
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de Doctor"
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="Date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="observaciones"
            className="block text-gray-700 uppercase font-bold"
          >
            Observaciones
          </label>
          <textarea
            id="observaciones"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Digita las Observaciones"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 
           cursor-pointer transition-colors"
          // value="Agregar Pacientes"
          value={btnPacientes}
        />
      </form>
    </div>
  );
}

export default Formulario;
