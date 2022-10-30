import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";


import send from "./routes/route.js";
const port = process.env.PORT || 3001


const app = express();
const httpServer = createServer(app);

app.use("/data", send);

const io = new Server(httpServer, {
  // ...
});

io.on("connection", (socket) => {
  console.log("Someone is connected")
});

httpServer.listen(3001);