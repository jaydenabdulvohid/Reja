console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 = Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session ga bogliq kodlar

// 3Views kodlari
app.set("views", "views");
app.set("view engine", "ejs"); //ejs orqali biz html frontentni yasaymiz

// 4 - rotterlarga moslashtirilgan

app.post("/create-item", (req, res) => {
  //console.log(req.body);
  // console.log(req);
  // res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is runing succesfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
