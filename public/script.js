const socket = io("/");

const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;

const myPeer = new Peer(undefined, {
  host: "/",
  port: 3001,
});

myPeer.on("open", (id) => {
  socket.emit("join-room", roomId, id);
});

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {});

socket.on("user-connected", (userId) => {
  console.log(`User Connected : ${userId}`);
});



