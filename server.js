//http, express => node.js
const express = require("express"); //express 라이브러리 불러옴

const server = express(); //express 실행
const PORT = process.env.PORT || 9077;

server.set("view engine", "ejs");
server.set("views", process.cwd() + "/client/html");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/client", express.static("client"));

// let db = [];
let db = ['qr01', 'qr02', 'qr03', 'qr04', 'qr05', 'qr06', 'qr07', 'qr08', 'qr09', 'qr10', 'qr11'];
// db 체크
console.log(db);


server.get("/", function (req, res) {
  res.render("splash");
});
server.get("/login", function (req, res) {
  res.render("login");
});
server.get("/home", function (req, res) {
  res.render("home");
});
server.get("/greet", function (req, res) {
  res.render("greet");
});
server.get("/course", function (req, res) {
  res.render("course", { db: db });
});
server.get("/qr", function (req, res) {
  res.render("qr");
});
server.get("/restaurant", function (req, res) {
  res.render("restaurant");
});
server.get("/parking", function (req, res) {
  res.render("parking");
});
server.get("/come", function (req, res) {
  res.render("come");
});
server.get("/stamp", function (req, res) {
  res.render("stamp", { db: db });
});
server.post("/qr", function (req, res) {
  const type = req.body.type;
  if (db.indexOf(type) === -1) {
    db.push(type);
  }
  console.log('db='+db);
  res.send({ success: true });
});

server.listen(PORT, function () {
  console.log("로컬서버오픈: http://localhost:" + PORT);
});



// 
