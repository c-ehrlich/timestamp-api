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

app.get("/api/:time", (req, res) => {
  // res.json({ time: req.params.time });
  const timeIn = req.params.time.split("-");
  if (timeIn.length === 3) {
    res.json({ todo: todo })
  } else if (timeIn.length === 1) {
    const timeInt = parseInt(req.params.time, 10);
    const utc = new Date(timeInt);
    res.json({
      unix: timeInt,
      utc: utc.toUTCString(),
    });
  } else {
    res.json({
      error:
        "Invalid Date",
    });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
