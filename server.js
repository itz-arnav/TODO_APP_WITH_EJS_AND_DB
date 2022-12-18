const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { getDate, getOnlyWeekday } = require(__dirname + "/date.js");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let itemarray = ["Learn Backend", "Learn CP", "Learn Aptitude"];
let workarray = [];

app.get("/", function (req, res) {
  res.render("list", {
    name: getDate(),
    listItems: itemarray,
  });
});

app.get("/work", function (req, res) {
  res.render("list", {
    name: "Work List",
    listItems: workarray,
  });
});

app.get("/about", function (req, res) {
  res.render("about", {});
});

app.post("/", function (req, res) {
  let item = req.body.item_name;
  if (req.body.button === "Work") {
    workarray.push(item);
    res.redirect("/work");
  } else {
    itemarray.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log("Server started at 3000...");
});
