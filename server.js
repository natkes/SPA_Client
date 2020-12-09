const express = require('express');
const app = express();

app.use(express.static("./dist/SpaClient"));

app.get("/*", function(req, res,next) {
  res.sendFile("index.html", {root: "./dist/SpaClient"});
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(process.env.PORT || 8080);
