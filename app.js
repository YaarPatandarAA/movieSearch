const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

var apiFile = require('./api.js');

app.get("/results", function(req, res) {
    request("http://www.omdbapi.com/?apikey=" + apiFile.api +"&s=star", function (error, response, body) {
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body);
            res.send(results["Search"][0]["Title"]);
        }
    });
});

app.get("*", function(req, res) {
    res.send("404 Not Found");
});
app.listen(port, function() {
    console.log("Server has started on port: " + port);
});