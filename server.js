// import express from "express";
// import bodyParser from "body-parser";
// import { Server } from "socket.io";
// import { createServer } from "http";
const express = require("express")
const bodyParser = require("body-parser")
const Server = require("socket.io").Server

const app = express();

const server = require("http").createServer(app)

// import { createServer } from "http";
// import send from "./routes/route.js";
const send = require("./routes/route.js")
// const server = createServer(app)


const port = process.env.PORT || 3001

app.use(bodyParser.json())

app.use("/data", send);

app.use("/", (req,res)=>{
    res.sendFile(__dirname + "/testing.socket.html")
})
const io = new Server(server, {
    
})

io.on("connection", (socket) =>{
    console.log("Someone is connected")
    console.log(socket)
})
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})