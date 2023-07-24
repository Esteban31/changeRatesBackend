import { config } from "dotenv";
config();

import express from "express";
import router from './routes/router.js';
import cors from 'cors'

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ['GET', 'PUT', 'POST', 'DELETE']
  })
);

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
