import Ticket from "./(components)/Ticket";

const obtTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Fallo al conseguir los tickets: ", error);
  }
};

const PaginaInicial = async () => {
  const { tickets } = await obtTickets();

  const unicasCategorias = [
    ...new Set(tickets?.map(({ categoria }) => categoria)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          unicasCategorias?.map((unicaCategoria, numCategoria) => (
            <div key={numCategoria} className="mb-4">
              <h2>{unicaCategoria}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-3"></div>

              {tickets
                .filter((ticket) => ticket.categoria === unicaCategoria)
                .map((filteredTicket, _index) => (
                  <Ticket id={_index} key={_index} ticket={filteredTicket} />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PaginaInicial;
