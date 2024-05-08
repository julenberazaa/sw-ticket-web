"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FormularioEditorTickets = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Fallo al crear el ticket.");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Fallo al crear el ticket.");
      }
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    titulo: "",
    descripcion: "",
    prioridad: 1,
    progreso: 0,
    estado: "sin empezar",
    categoria: "Festivales",
    precio: "",
  };

  if (EDITMODE) {
    startingTicketData["titulo"] = ticket.titulo;
    startingTicketData["descripcion"] = ticket.descripcion;
    startingTicketData["prioridad"] = ticket.prioridad;
    startingTicketData["progreso"] = ticket.progreso;
    startingTicketData["estado"] = ticket.estado;
    startingTicketData["categoria"] = ticket.categoria;
    startingTicketData["precio"] = ticket.precio;
  }

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Actualiza tu ticket" : "Crea tu ticket"}</h3>
        <label>Título</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.titulo}
        />
        <label>Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          onChange={handleChange}
          required={true}
          value={formData.descripcion}
          rows="5"
        />

        <label>Categoría</label>
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
        >
          <option value="Festivales">Festivales</option>
          <option value="Conciertos">Conciertos</option>
          <option value="Teatros">Teatros</option>
          <option value="Deportes">Deportes</option>
          <option value="Conferencias">Conferencias</option>
        </select>

        <label>Progreso</label>
        <input
          type="range"
          id="progreso"
          name="progreso"
          value={formData.progreso}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label>Spiciness</label>
        <div>
          <input
            id="priority-1"
            name="prioridad"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.prioridad == 1}
          />
          <label>1</label>

          <input
            id="priority-2"
            name="prioridad"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.prioridad == 2}
          />
          <label>2</label>

          <input
            id="priority-3"
            name="prioridad"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.prioridad == 3}
          />
          <label>3</label>

          <input
            id="priority-4"
            name="prioridad"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.prioridad == 4}
          />
          <label>4</label>

          <input
            id="priority-5"
            name="prioridad"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.prioridad == 5}
          />
          <label>5</label>
        </div>

        <label>Estado</label>
        <select name="estado" value={formData.estado} onChange={handleChange}>
          <option value="sin empezar">Sin comenzar</option>
          <option value="comenzado">Comenzado</option>
          <option value="finalizado">Finalizado</option>
        </select>

        

        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "Actualiza tu ticket" : "Crea tu ticket"}
        />
      </form>
    </div>
  );
};

export default FormularioEditorTickets;
