const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("We have a new connection");

  //the disconnect is inside the io.on because we are managing the same socket created earlier.
  socket.on("disconnect", () => {
    console.log("User just left!");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
