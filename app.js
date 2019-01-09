const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

app.get("/results", function(req, res) {
    res.send("Hello, it works!");
});

app.get("*", function(req, res) {
    res.send("404 Not Found");
});
app.listen(port, function() {
    console.log("Server has started on port: " + port);
});