// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

/**
 * /api
 * ---------
 * returns the current date as UNIX timestamp and UTC string
 */
app.get("/api", (req, res) => {
  date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

/**
 * /api/:time
 * ----------
 * can take an input of either a unix timestamp (in milliseconds) or
 * strings in the format "YYYY-MM-DD"
 */
app.get("/api/:time", (req, res) => {
  let date;
  if (!isNaN(req.params.time)) {
    date = new Date(parseInt(req.params.time, 10));
  } else {
    date = new Date(req.params.time);
  }

  console.log(date);
  console.log(typeof date);

  if (isNaN(date)) res.json({ error: "Invalid Date" });

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
