import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
});

const categoria =
  mongoose.models.categoria || mongoose.model("categoria", categoriaSchema);
export default categoria;
