const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const user = [];

io.on("connection", socket => {
  socket.on("addUser", username => {
    user.push(username);
    io.emit("broadcastUser", user);
  });
});

http.listen(5000, function() {
  console.log("listening on port 5000");
});
