import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import express from "express";

// import router from './routes/router.js';
import cors from 'cors'


// Iniciamos conexión con firebase - Descomentar para iniciar la conexión
// import "./bd/firebase.js";

const app = express();

app.use(
    cors({
      origin: "*",
      methods: ['GET', 'PUT', 'POST', 'DELETE']
    })
);
app.use(express.json())
// app.use(router);

app.listen(process.env.port)
console.log("Port listening on "+process.env.port);
