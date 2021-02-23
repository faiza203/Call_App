const express = require("express");
const { v4: uuidV4 } = require("uuid");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = process.env.PORT || 8000;
const roomId = uuidV4();

app.set("view engine", "ejs");
app.use(express.static("Public"));

app.get("/", (req, res) => {
  console.log(roomId);
  res.redirect(`/${roomId}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

server.listen(port);
