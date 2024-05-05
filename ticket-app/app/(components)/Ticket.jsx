import BarraProgreso from "./BarraProgreso";
import Estado from "./Estado";
import VisualizacionPrioridad from "./VisualizacionPrioridad";
import BorrarBloque from "./borrarBloque";

const Ticket = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover ronded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <VisualizacionPrioridad />
        <div className="ml-auto">
          <BorrarBloque />
        </div>
      </div>
      <h4>Nombre Ticket</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">esta es la descripcion del ticket</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">05/05/2024 20:02</p>
          <BarraProgreso />
        </div>
        <div className="ml-auto flex items-end">
          <Estado />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
