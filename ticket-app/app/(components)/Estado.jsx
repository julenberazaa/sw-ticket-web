const Estado = ({ estado }) => {
  const obtColor = (estado) => {
    let color = "bg-slate-700";
    switch (estado.toLowerCase()) {
      case "sin empezar":
        color = "bg-green-300";
        return color;
      case "comenzado":
        color = "bg-yellow-200";
        return color;
      case "finalizado":
        color = "bg-red-300";
        return color;
    }
    return color;
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${obtColor(
        estado
      )}`}
    >
      {estado}
    </span>
  );
};

export default Estado;
