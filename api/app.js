const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Welcome to my awesome app!");
});

app.listen(4000, function () {
    console.log("app listening on port 4000");
});