"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FormularioEditorTickets = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("entregado");
  };

  const startingTicketData = {
    titulo: "",
    descripcion: "",
    prioridad: 1,
    progreso: 0,
    status: "sin empezar",
    categoria: "Festivales",
  };

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Crea tu ticket</h3>
        <label>Título</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.titulo}
        />
        <label>Descripcion</label>
        <textarea
          id="descripcion"
          name="descripcion"
          onChange={handleChange}
          required={true}
          value={formData.descripcion}
        />
      </form>
    </div>
  );
};

export default FormularioEditorTickets;
