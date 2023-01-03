const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Templating Engines
app.set("views", './src/views')
app.set("view engine", "ejs");

// Routes
const  newsRouter = require('./src/routes/news');
app.use("/", newsRouter);
app.use("/article", newsRouter);

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })

// New API Key
// 3d7b073ae70f42bc8f1366f4bf8d3855


app.listen(port, function(){
    console.log(`listen on port ${port}`);
})
