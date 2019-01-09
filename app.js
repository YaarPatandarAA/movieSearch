const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
app.set("view engine", "ejs")
var apiFile = require('./api.js');

app.get("/results", function(req, res) {
    request("http://www.omdbapi.com/?apikey=" + apiFile.api +"&s=star", function (error, response, body) {
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data})
        }
    });
});

app.get("*", function(req, res) {
    res.send("404 Not Found");
});
app.listen(port, function() {
    console.log("Server has started on port: " + port);
});