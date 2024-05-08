import Link from "next/link";
import BarraProgreso from "./BarraProgreso";
import Estado from "./Estado";
import VisualizacionPrioridad from "./VisualizacionPrioridad";
import BorrarBloque from "./BorrarBloque";


const Ticket = ({ ticket }) => {
  const fecha = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    const date = new Date(timestamp);
    const fechaFormateada = date.toLocaleString("es-ES", options);

    return fechaFormateada;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover ronded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <VisualizacionPrioridad prioridad={ticket.prioridad} />
        <div className="ml-auto">
          <BorrarBloque id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.titulo}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.descripcion}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{fecha(ticket.createdAt)}</p>
            <BarraProgreso progreso={ticket.progreso} />
          </div>
          <div className="ml-auto flex items-end">
            <Estado estado={ticket.estado} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Ticket;
