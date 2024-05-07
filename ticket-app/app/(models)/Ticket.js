import mongoose, { Schema } from "mongoose";
import Estado from "../(components)/Estado";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketShema = new Schema(
  {
    titulo: String,
    descripcion: String,
    categoria: String,
    prioridad: Number,
    progreso: Number,
    estado: String,
    precio: Number,
    activo: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketShema);
export default Ticket;
