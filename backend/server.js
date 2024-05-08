import express from "express";
import 'dotenv/config';
import contactRoutes from "./routes/contacts.routes.js";
import cors from 'cors';

const app = express();

app.use(cors(
  {
    origin: 'http://localhost:5173'
  }
));
app.use(express.json());
app.use('/v1',contactRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the contacts API!");
});


export{app};