const express = require('express');
const app = express();

app.use(express.static("./dist/SpaClient"));

app.get("/*", function(req, res,next) {
  res.sendFile("index.html", {root: "./dist/SpaClient"});
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.listen(process.env.PORT || 8080);
