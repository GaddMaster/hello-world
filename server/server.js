console.clear();
console.log("");

process.env.TZ = "Europe/Dublin";

const express = require("express");
const path = require("path");

const app = express();

const pathToBuild = "../client/build";

app.use(express.static(pathToBuild, { etag: false }));

app.get("*", function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  const file = path.resolve(pathToBuild, "index.html");
  res.sendFile(file);
});

const port = process.env.PORT || 3000;

app.listen(port, function(err) {
  if (err) return console.error(" PORT ERROR ", err);
  console.log("");
  console.log(" APP RUNNING ON PORT ", port);
  console.log("");
});
