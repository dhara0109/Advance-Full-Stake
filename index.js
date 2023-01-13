const express = require('express');
const app = new express();


app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.html");
})
app.listen(4000, ()  => {
    console.log('App is running');
})