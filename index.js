import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import express from "express";

// import router from './routes/router.js';
import cors from 'cors'


const app = express();

app.use(
    cors({
      origin: "*",
      methods: ['GET', 'PUT', 'POST', 'DELETE']
    })
);
app.use(express.json())
app.use(dotenv.config())
// app.use(router);

app.listen(process.env.port)
console.log("Port listening on "+process.env.port);
