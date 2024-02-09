// eslint-disable-next-line react/prop-types
// function Errores({ mensaje }) {
//   return (
//     <div className=" mb-3 p-3 bg-red-500 text-white text-center font-bold uppercase rounded-md">
//       <p>{mensaje}</p>
//     </div>
//   );
// }
// eslint-disable-next-line react/prop-types
function Errores({ children }) {
  return (
    <div className=" mb-3 p-3 bg-red-500 text-white text-center font-bold uppercase rounded-md">
      {children}
    </div>
  );
}

export default Errores;
