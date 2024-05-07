import FormularioEditorTickets from "@/app/(components)/FormularioEditorTickets";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Fallo al obtener los tickets");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let actualizarDatosTicket = {};

  if (EDITMODE) {
    actualizarDatosTicket = await getTicketById(params.id);
    actualizarDatosTicket = actualizarDatosTicket.foundTicket;
  } else {
    actualizarDatosTicket = {
      _id: "new",
    };
  }
  return <FormularioEditorTickets ticket={actualizarDatosTicket} />;
};

export default TicketPage;
