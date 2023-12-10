import Header from "./Header";
import useHistorial from "../hooks/useHistorial";
import Presupuesto from "./Presupuesto";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Historial = () => {
  const { historial } = useHistorial();
  const clearLS = () => {
    localStorage.clear();
    Swal.fire({
      icon: "success",
      text: "Historial borrado con éxito!",
      showConfirmButton: false,
      timer: 1900,
    });
    setTimeout(() => {
      location.replace("/cotizador");
    }, 2000);
  };
  return (
    <>
      <Header />
      <h2 className="center">Historial 📋</h2>
      <div className=" center cotizador">
        <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((elemento, indice) => (
              <Presupuesto key={indice} {...elemento} />
            ))}
          </tbody>
        </table>
        <div className="center separador">
          <button className="button button-outline" onClick={clearLS}>
            Borrar historial
          </button>

          <button className="button button-outline">
            <Link to="/" title="Cotizador">
              Volver al Home 🏡
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Historial;
