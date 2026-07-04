import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
      <title>Socket Test</title>
  </head>
  <body>
  <script src="/socket.io/socket.io.js"></script>
  
  <h2>Socket Test</h2>
    <script>
    
    const socket = io();
    
    socket.on("connect", () => {
        console.log("Connected:", socket.id);
    });
    
    socket.on("message", (msg)=>{
        console.log("Received:", msg);
    });
    
    // Console testing ke liye
    window.socket = socket;
    
    </script>
  
  </body>
  </html>
  `);
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  // Join a room
  socket.on("join", (roomId) => {
    socket.join(roomId);
    console.log(socket.id, "joined", room);
  });
  socket.on("leave", (roomId) => {
    socket.leave(roomId);
  });

  //   Broadcast to room
  socket.on("send", (message) => {
    console.log(message);
    socket.to(message.room).emit("message", message);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
