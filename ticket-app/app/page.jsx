import Ticket from "./(components)/Ticket";

const PaginaInicial = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-3">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
};

export default PaginaInicial;
