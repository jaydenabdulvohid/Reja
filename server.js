const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Jayden777:Abdulvohid777@cluster0.jtkglnq.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 8004;
      server.listen(PORT, function () {
        console.log(
          `The server is runing succesfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
