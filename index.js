const express = require("express");
const path = require("path");

const app = express();

app.set('views', path)

app.get("/json", (req, res, next) => {
    const greeting = {"hello_type": "British", "verbal": "Greeting, mate"}
    res.json(greeting)
});

app.get("/", (req, res, next) => {
    res.send('Hello Britain')
})

// Server listener
var server = app.listen(process.env.PORT || 3000, () => {
    console.log("The server is now running at http://localhost:" + 3000);
});
