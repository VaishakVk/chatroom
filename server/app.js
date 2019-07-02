const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const user = [];
const conversation = [];

io.on("connection", socket => {
  socket.on("addUser", username => {
    user.push(username);
    io.emit("broadcastUser", user);
  });

  socket.on("sendMessage", message => {
    conversation.push(message);
    io.emit("broadcastMessage", conversation);
  });
});

http.listen(5000, function() {
  console.log("listening on port 5000");
});
