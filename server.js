const express = require('express');
const app = express();

app.use(express.static("./dist/SpaClient"));

app.get("/*", function(req, res,next) {
  res.sendFile("index.html", {root: "./dist/SpaClient"});
});

app.listen(process.env.PORT || 8080);
