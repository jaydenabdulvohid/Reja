console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// MongoDB chaqirish
const db = require("./server").db();

// 1 = Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session ga bogliq kodlar

// 3Views kodlari
app.set("views", "views");
app.set("view engine", "ejs"); //ejs orqali biz html frontentni yasaymiz

// 4 - rotterlarga moslashtirilgan

app.post("/create-item", (req, res) => {});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
